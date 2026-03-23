import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = new Hono();

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ae1e2212/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// AUTHENTICATION ENDPOINTS
// ============================================

// Sign up
app.post("/make-server-ae1e2212/auth/signup", async (c) => {
  try {
    const { email, password, name, age, gender, location, lookingFor, bio, interests, vibe } = await c.req.json();
    
    console.log(`Signup attempt for email: ${email}`);
    
    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      email_confirm: true, // Auto-confirm since email server isn't configured
    });

    if (authError) {
      console.error(`Auth error during signup: ${authError.message}`);
      return c.json({ error: authError.message }, 400);
    }

    const userId = authData.user.id;

    // Create user profile in KV store
    const userProfile = {
      id: userId,
      email,
      name,
      age,
      gender,
      location,
      lookingFor,
      bio,
      interests: interests || [],
      currentVibe: vibe || 'Chill',
      images: [],
      height: '',
      weight: '',
      prompts: [],
      isOnline: true,
      featured: false,
      verified: false,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`user:${userId}`, userProfile);

    console.log(`User created successfully: ${userId}`);
    
    return c.json({ 
      user: userProfile,
      access_token: authData.session?.access_token 
    });
  } catch (error) {
    console.error(`Signup error: ${error}`);
    return c.json({ error: `Signup failed: ${error.message}` }, 500);
  }
});

// Sign in
app.post("/make-server-ae1e2212/auth/signin", async (c) => {
  try {
    const { email, password } = await c.req.json();
    
    console.log(`Signin attempt for email: ${email}`);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(`Signin error: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // Get user profile
    const userProfile = await kv.get(`user:${data.user.id}`);

    // Update online status
    if (userProfile) {
      userProfile.isOnline = true;
      await kv.set(`user:${data.user.id}`, userProfile);
    }

    console.log(`User signed in successfully: ${data.user.id}`);
    
    return c.json({ 
      user: userProfile,
      access_token: data.session.access_token 
    });
  } catch (error) {
    console.error(`Signin error: ${error}`);
    return c.json({ error: `Signin failed: ${error.message}` }, 500);
  }
});

// Get current user
app.get("/make-server-ae1e2212/auth/me", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error } = await supabase.auth.getUser(accessToken);

    if (error || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userProfile = await kv.get(`user:${user.id}`);

    if (!userProfile) {
      return c.json({ error: 'User profile not found' }, 404);
    }

    return c.json({ user: userProfile });
  } catch (error) {
    console.error(`Get current user error: ${error}`);
    return c.json({ error: `Failed to get user: ${error.message}` }, 500);
  }
});

// ============================================
// USER PROFILE ENDPOINTS
// ============================================

// Get all users (for browse view)
app.get("/make-server-ae1e2212/users", async (c) => {
  try {
    const gender = c.req.query('gender'); // Optional filter by gender
    
    const allUsers = await kv.getByPrefix('user:');
    
    let filteredUsers = allUsers;
    if (gender) {
      filteredUsers = allUsers.filter((user: any) => user.gender === gender);
    }

    return c.json({ users: filteredUsers });
  } catch (error) {
    console.error(`Get users error: ${error}`);
    return c.json({ error: `Failed to get users: ${error.message}` }, 500);
  }
});

// Get user by ID
app.get("/make-server-ae1e2212/users/:id", async (c) => {
  try {
    const userId = c.req.param('id');
    const user = await kv.get(`user:${userId}`);

    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }

    return c.json({ user });
  } catch (error) {
    console.error(`Get user error: ${error}`);
    return c.json({ error: `Failed to get user: ${error.message}` }, 500);
  }
});

// Update user profile
app.put("/make-server-ae1e2212/users/:id", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !authUser) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userId = c.req.param('id');

    // Ensure user can only update their own profile
    if (authUser.id !== userId) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const updates = await c.req.json();
    const currentProfile = await kv.get(`user:${userId}`);

    if (!currentProfile) {
      return c.json({ error: 'User not found' }, 404);
    }

    const updatedProfile = { ...currentProfile, ...updates };
    await kv.set(`user:${userId}`, updatedProfile);

    console.log(`User profile updated: ${userId}`);

    return c.json({ user: updatedProfile });
  } catch (error) {
    console.error(`Update user error: ${error}`);
    return c.json({ error: `Failed to update user: ${error.message}` }, 500);
  }
});

// Update user vibe
app.put("/make-server-ae1e2212/users/:id/vibe", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user: authUser }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !authUser) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userId = c.req.param('id');

    if (authUser.id !== userId) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const { vibe } = await c.req.json();
    const userProfile = await kv.get(`user:${userId}`);

    if (!userProfile) {
      return c.json({ error: 'User not found' }, 404);
    }

    userProfile.currentVibe = vibe;
    await kv.set(`user:${userId}`, userProfile);

    console.log(`User vibe updated: ${userId} -> ${vibe}`);

    // Notify followers (create notifications)
    const followers = await kv.getByPrefix(`follow:follower:${userId}:`);
    for (const follow of followers) {
      const notification = {
        id: crypto.randomUUID(),
        userId: follow.followerId,
        type: 'vibe_change',
        message: `${userProfile.name} changed their vibe to ${vibe}`,
        read: false,
        createdAt: new Date().toISOString(),
        relatedUserId: userId,
      };
      await kv.set(`notification:${notification.id}`, notification);
    }

    return c.json({ user: userProfile });
  } catch (error) {
    console.error(`Update vibe error: ${error}`);
    return c.json({ error: `Failed to update vibe: ${error.message}` }, 500);
  }
});

// ============================================
// PHOTO UPLOAD ENDPOINTS
// ============================================

// Initialize storage bucket
async function initializeBucket() {
  try {
    const bucketName = 'make-ae1e2212-photos';
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      console.error(`Error listing buckets: ${listError.message}`);
      return;
    }
    
    const bucketExists = buckets?.some(bucket => bucket.name === bucketName);
    
    if (!bucketExists) {
      const { data, error: createError } = await supabase.storage.createBucket(bucketName, {
        public: false,
        fileSizeLimit: 5242880, // 5MB
      });
      
      if (createError) {
        console.error(`Error creating bucket: ${createError.message}`);
      } else {
        console.log(`Created storage bucket: ${bucketName}`);
      }
    } else {
      console.log(`Storage bucket already exists: ${bucketName}`);
    }
  } catch (error) {
    console.error(`Bucket initialization error: ${error}`);
  }
}

// Call on startup
initializeBucket();

// Test endpoint to check storage status
app.get("/make-server-ae1e2212/storage/test", async (c) => {
  try {
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      return c.json({ 
        status: 'error', 
        message: error.message,
        buckets: null 
      });
    }
    
    const photoBucket = buckets?.find(b => b.name === 'make-ae1e2212-photos');
    
    return c.json({ 
      status: 'ok',
      bucketExists: !!photoBucket,
      bucketName: photoBucket?.name || 'not found',
      allBuckets: buckets?.map(b => b.name) || []
    });
  } catch (error) {
    return c.json({ 
      status: 'error', 
      message: error.message 
    });
  }
});

// Upload photo
app.post("/make-server-ae1e2212/photos/upload", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const formData = await c.req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return c.json({ error: 'No file provided' }, 400);
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${crypto.randomUUID()}.${fileExt}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await supabase.storage
      .from('make-ae1e2212-photos')
      .upload(fileName, arrayBuffer, {
        contentType: file.type,
      });

    if (uploadError) {
      console.error(`Photo upload error: ${uploadError.message}`);
      return c.json({ error: uploadError.message }, 400);
    }

    // Get signed URL (valid for 1 year)
    const { data: { signedUrl }, error: signedUrlError } = await supabase.storage
      .from('make-ae1e2212-photos')
      .createSignedUrl(fileName, 31536000);

    if (signedUrlError) {
      console.error(`Signed URL error: ${signedUrlError.message}`);
      return c.json({ error: signedUrlError.message }, 400);
    }

    console.log(`Photo uploaded successfully: ${fileName}`);

    return c.json({ url: signedUrl, fileName });
  } catch (error) {
    console.error(`Photo upload error: ${error}`);
    return c.json({ error: `Failed to upload photo: ${error.message}` }, 500);
  }
});

// Delete photo
app.delete("/make-server-ae1e2212/photos/:fileName", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const fileName = c.req.param('fileName');

    // Verify user owns this photo
    if (!fileName.startsWith(user.id)) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const { error: deleteError } = await supabase.storage
      .from('make-ae1e2212-photos')
      .remove([fileName]);

    if (deleteError) {
      console.error(`Photo delete error: ${deleteError.message}`);
      return c.json({ error: deleteError.message }, 400);
    }

    console.log(`Photo deleted successfully: ${fileName}`);

    return c.json({ success: true });
  } catch (error) {
    console.error(`Photo delete error: ${error}`);
    return c.json({ error: `Failed to delete photo: ${error.message}` }, 500);
  }
});

// ============================================
// MESSAGING ENDPOINTS
// ============================================

// Get conversations for a user
app.get("/make-server-ae1e2212/conversations", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const allConversations = await kv.getByPrefix('conversation:');
    const userConversations = allConversations.filter((conv: any) => 
      conv.participants.includes(user.id)
    );

    // Sort by last message time
    userConversations.sort((a: any, b: any) => 
      new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
    );

    return c.json({ conversations: userConversations });
  } catch (error) {
    console.error(`Get conversations error: ${error}`);
    return c.json({ error: `Failed to get conversations: ${error.message}` }, 500);
  }
});

// Create or get conversation
app.post("/make-server-ae1e2212/conversations", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { otherUserId } = await c.req.json();

    // Check if conversation already exists
    const allConversations = await kv.getByPrefix('conversation:');
    const existingConv = allConversations.find((conv: any) => 
      conv.participants.includes(user.id) && conv.participants.includes(otherUserId)
    );

    if (existingConv) {
      return c.json({ conversation: existingConv });
    }

    // Create new conversation
    const conversationId = crypto.randomUUID();
    const conversation = {
      id: conversationId,
      participants: [user.id, otherUserId],
      lastMessage: '',
      lastMessageAt: new Date().toISOString(),
      unreadCount: { [user.id]: 0, [otherUserId]: 0 },
      createdAt: new Date().toISOString(),
    };

    await kv.set(`conversation:${conversationId}`, conversation);

    console.log(`Conversation created: ${conversationId}`);

    return c.json({ conversation });
  } catch (error) {
    console.error(`Create conversation error: ${error}`);
    return c.json({ error: `Failed to create conversation: ${error.message}` }, 500);
  }
});

// Get messages for a conversation
app.get("/make-server-ae1e2212/conversations/:id/messages", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const conversationId = c.req.param('id');
    const conversation = await kv.get(`conversation:${conversationId}`);

    if (!conversation) {
      return c.json({ error: 'Conversation not found' }, 404);
    }

    // Verify user is participant
    if (!conversation.participants.includes(user.id)) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    const allMessages = await kv.getByPrefix(`message:${conversationId}:`);
    
    // Sort by timestamp
    allMessages.sort((a: any, b: any) => 
      new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    return c.json({ messages: allMessages });
  } catch (error) {
    console.error(`Get messages error: ${error}`);
    return c.json({ error: `Failed to get messages: ${error.message}` }, 500);
  }
});

// Send message
app.post("/make-server-ae1e2212/conversations/:id/messages", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const conversationId = c.req.param('id');
    const { text } = await c.req.json();

    const conversation = await kv.get(`conversation:${conversationId}`);

    if (!conversation) {
      return c.json({ error: 'Conversation not found' }, 404);
    }

    if (!conversation.participants.includes(user.id)) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    // Create message
    const messageId = crypto.randomUUID();
    const message = {
      id: messageId,
      conversationId,
      senderId: user.id,
      text,
      timestamp: new Date().toISOString(),
      read: false,
    };

    await kv.set(`message:${conversationId}:${messageId}`, message);

    // Update conversation
    conversation.lastMessage = text;
    conversation.lastMessageAt = message.timestamp;
    
    // Increment unread count for other participant
    const otherUserId = conversation.participants.find((id: string) => id !== user.id);
    conversation.unreadCount[otherUserId] = (conversation.unreadCount[otherUserId] || 0) + 1;
    
    await kv.set(`conversation:${conversationId}`, conversation);

    // Create notification for other user
    const senderProfile = await kv.get(`user:${user.id}`);
    const notification = {
      id: crypto.randomUUID(),
      userId: otherUserId,
      type: 'new_message',
      message: `${senderProfile.name} sent you a message`,
      read: false,
      createdAt: new Date().toISOString(),
      relatedUserId: user.id,
      conversationId,
    };
    await kv.set(`notification:${notification.id}`, notification);

    console.log(`Message sent: ${messageId}`);

    return c.json({ message });
  } catch (error) {
    console.error(`Send message error: ${error}`);
    return c.json({ error: `Failed to send message: ${error.message}` }, 500);
  }
});

// Mark messages as read
app.put("/make-server-ae1e2212/conversations/:id/read", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const conversationId = c.req.param('id');
    const conversation = await kv.get(`conversation:${conversationId}`);

    if (!conversation) {
      return c.json({ error: 'Conversation not found' }, 404);
    }

    if (!conversation.participants.includes(user.id)) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    // Reset unread count
    conversation.unreadCount[user.id] = 0;
    await kv.set(`conversation:${conversationId}`, conversation);

    return c.json({ success: true });
  } catch (error) {
    console.error(`Mark as read error: ${error}`);
    return c.json({ error: `Failed to mark as read: ${error.message}` }, 500);
  }
});

// ============================================
// FOLLOW ENDPOINTS
// ============================================

// Follow a user
app.post("/make-server-ae1e2212/follows", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { targetUserId } = await c.req.json();

    const followId = crypto.randomUUID();
    const follow = {
      id: followId,
      followerId: user.id,
      followingId: targetUserId,
      createdAt: new Date().toISOString(),
    };

    await kv.set(`follow:follower:${targetUserId}:${user.id}`, follow);
    await kv.set(`follow:following:${user.id}:${targetUserId}`, follow);

    // Create notification
    const followerProfile = await kv.get(`user:${user.id}`);
    const notification = {
      id: crypto.randomUUID(),
      userId: targetUserId,
      type: 'new_follower',
      message: `${followerProfile.name} started following you`,
      read: false,
      createdAt: new Date().toISOString(),
      relatedUserId: user.id,
    };
    await kv.set(`notification:${notification.id}`, notification);

    console.log(`User ${user.id} followed ${targetUserId}`);

    return c.json({ follow });
  } catch (error) {
    console.error(`Follow error: ${error}`);
    return c.json({ error: `Failed to follow user: ${error.message}` }, 500);
  }
});

// Unfollow a user
app.delete("/make-server-ae1e2212/follows/:targetUserId", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const targetUserId = c.req.param('targetUserId');

    await kv.del(`follow:follower:${targetUserId}:${user.id}`);
    await kv.del(`follow:following:${user.id}:${targetUserId}`);

    console.log(`User ${user.id} unfollowed ${targetUserId}`);

    return c.json({ success: true });
  } catch (error) {
    console.error(`Unfollow error: ${error}`);
    return c.json({ error: `Failed to unfollow user: ${error.message}` }, 500);
  }
});

// Get followers
app.get("/make-server-ae1e2212/users/:id/followers", async (c) => {
  try {
    const userId = c.req.param('id');
    const follows = await kv.getByPrefix(`follow:follower:${userId}:`);

    return c.json({ followers: follows });
  } catch (error) {
    console.error(`Get followers error: ${error}`);
    return c.json({ error: `Failed to get followers: ${error.message}` }, 500);
  }
});

// Get following
app.get("/make-server-ae1e2212/users/:id/following", async (c) => {
  try {
    const userId = c.req.param('id');
    const follows = await kv.getByPrefix(`follow:following:${userId}:`);

    return c.json({ following: follows });
  } catch (error) {
    console.error(`Get following error: ${error}`);
    return c.json({ error: `Failed to get following: ${error.message}` }, 500);
  }
});

// ============================================
// NOTIFICATION ENDPOINTS
// ============================================

// Get notifications for user
app.get("/make-server-ae1e2212/notifications", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const allNotifications = await kv.getByPrefix('notification:');
    const userNotifications = allNotifications.filter((notif: any) => notif.userId === user.id);

    // Sort by creation time
    userNotifications.sort((a: any, b: any) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return c.json({ notifications: userNotifications });
  } catch (error) {
    console.error(`Get notifications error: ${error}`);
    return c.json({ error: `Failed to get notifications: ${error.message}` }, 500);
  }
});

// Mark notification as read
app.put("/make-server-ae1e2212/notifications/:id/read", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const notificationId = c.req.param('id');
    const notification = await kv.get(`notification:${notificationId}`);

    if (!notification) {
      return c.json({ error: 'Notification not found' }, 404);
    }

    if (notification.userId !== user.id) {
      return c.json({ error: 'Forbidden' }, 403);
    }

    notification.read = true;
    await kv.set(`notification:${notificationId}`, notification);

    return c.json({ notification });
  } catch (error) {
    console.error(`Mark notification as read error: ${error}`);
    return c.json({ error: `Failed to mark notification as read: ${error.message}` }, 500);
  }
});

// Mark all notifications as read
app.put("/make-server-ae1e2212/notifications/read-all", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const allNotifications = await kv.getByPrefix('notification:');
    const userNotifications = allNotifications.filter((notif: any) => 
      notif.userId === user.id && !notif.read
    );

    for (const notification of userNotifications) {
      notification.read = true;
      await kv.set(`notification:${notification.id}`, notification);
    }

    return c.json({ success: true, count: userNotifications.length });
  } catch (error) {
    console.error(`Mark all notifications as read error: ${error}`);
    return c.json({ error: `Failed to mark all notifications as read: ${error.message}` }, 500);
  }
});

// ============================================
// PROFILE VIEW TRACKING
// ============================================

// Track profile view and create notification
app.post("/make-server-ae1e2212/profile-views", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: 'No access token provided' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { viewedUserId } = await c.req.json();

    // Don't create notification if viewing own profile
    if (user.id === viewedUserId) {
      return c.json({ success: true });
    }

    // Create notification for the viewed user
    const viewerProfile = await kv.get(`user:${user.id}`);
    const notification = {
      id: crypto.randomUUID(),
      userId: viewedUserId,
      type: 'profile_view',
      message: `${viewerProfile.name} viewed your profile`,
      read: false,
      createdAt: new Date().toISOString(),
      relatedUserId: user.id,
    };
    await kv.set(`notification:${notification.id}`, notification);

    console.log(`Profile view tracked: ${user.id} viewed ${viewedUserId}`);

    return c.json({ success: true });
  } catch (error) {
    console.error(`Track profile view error: ${error}`);
    return c.json({ error: `Failed to track profile view: ${error.message}` }, 500);
  }
});

Deno.serve(app.fetch);