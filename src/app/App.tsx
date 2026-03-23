import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OnboardingFlow } from './components/OnboardingFlow';
import { BrowseView } from './components/BrowseView';
import { ProfileDetail } from './components/ProfileDetail';
import { VibeEditor } from './components/VibeEditor';
import { NotificationsView } from './components/NotificationsView';
import { MessagesView } from './components/MessagesView';
import { MyProfileView } from './components/MyProfileView';
import { ProfilePreview } from './components/ProfilePreview';
import { FollowingView } from './components/FollowingView';
import { SignupPrompt } from './components/SignupPrompt';
import { ErrorBoundary } from './ErrorBoundary';
import { mockUsers, Vibe, User } from './data/mockUsers';
import { mockConversations } from './data/mockMessages';

export interface Notification {
  id: string;
  user: User;
  type: 'online' | 'vibe_change' | 'profile_view' | 'follow';
  timestamp: string;
  message: string;
  isRead: boolean;
}

function AppContent() {
  const [appState, setAppState] = useState<'welcome' | 'onboarding' | 'browse'>('welcome');
  const [interestedIn, setInterestedIn] = useState<'Men' | 'Women' | 'Everyone'>('Everyone');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showVibeEditor, setShowVibeEditor] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [showProfilePreview, setShowProfilePreview] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [userVibe, setUserVibe] = useState<Vibe>('Chill');
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [followedUsers, setFollowedUsers] = useState<User[]>([]);
  const [followers, setFollowers] = useState<User[]>([]);
  const [messageToUserId, setMessageToUserId] = useState<string | null>(null);
  const [isFullyOnboarded, setIsFullyOnboarded] = useState(false);
  const [showFullOnboarding, setShowFullOnboarding] = useState(false);
  const [partialUserData, setPartialUserData] = useState<any>(null);

  const handleOnboardingComplete = (data: any) => {
    console.log('Onboarding complete:', data);
    setInterestedIn(data.interestedIn || 'Everyone');
    setUserVibe(data.vibe || 'Chill');
    
    if (data.isFullyOnboarded) {
      // Full signup completed
      setIsFullyOnboarded(true);
      setShowFullOnboarding(false);
    } else {
      // Quick start completed - save partial data
      setPartialUserData(data);
    }
    
    setAppState('browse');
  };

  const handleProfileClick = (userId: string) => {
    setSelectedUserId(userId);
    setShowNotifications(false);
    setShowMessages(false);
    
    // Generate a notification (simulating someone viewing your profile back)
    const viewedUser = mockUsers.find(u => u.id === userId);
    if (viewedUser) {
      const newNotification: Notification = {
        id: `notif-${Date.now()}-${userId}`,
        user: viewedUser,
        type: 'profile_view',
        timestamp: 'Just now',
        message: 'viewed your profile',
        isRead: false
      };
      
      setNotifications(prev => [newNotification, ...prev]);
    }
  };

  const handleCloseProfile = () => {
    setSelectedUserId(null);
  };

  const handleFollow = (user: User) => {
    // Check if user is fully onboarded
    if (!isFullyOnboarded) {
      setSelectedUserId(null);
      setShowFullOnboarding(true);
      return;
    }
    
    setFollowedUsers(prev => {
      if (!prev.find(u => u.id === user.id)) {
        return [...prev, user];
      }
      return prev;
    });
    
    const newNotification: Notification = {
      id: `notif-follow-${Date.now()}-${user.id}`,
      user: user,
      type: 'follow',
      timestamp: 'Just now',
      message: 'started following you',
      isRead: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };

  const handleSendMessageToUser = (userId: string) => {
    setMessageToUserId(userId);
    setShowMessages(true);
    setSelectedUserId(null);
  };

  const handleVibeClick = () => {
    // Check if user is fully onboarded
    if (!isFullyOnboarded) {
      setShowFullOnboarding(true);
      return;
    }
    
    setShowVibeEditor(true);
  };

  const handleVibeSave = (vibe: Vibe) => {
    setUserVibe(vibe);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(true);
    setShowMessages(false);
  };

  const handleMessagesClick = () => {
    setShowMessages(true);
    setShowNotifications(false);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleMarkNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleCloseMessages = () => {
    setShowMessages(false);
    setMessageToUserId(null);
  };

  const handleMyProfileClick = () => {
    // Show profile preview for all users (onboarded or not)
    setShowProfilePreview(true);
  };

  const handleCloseMyProfile = () => {
    setShowMyProfile(false);
  };

  const handleCloseProfilePreview = () => {
    setShowProfilePreview(false);
  };

  const handleEditProfile = () => {
    // Check if user is fully onboarded before allowing edit
    if (!isFullyOnboarded) {
      setShowProfilePreview(false);
      setShowFullOnboarding(true);
      return;
    }
    
    setShowProfilePreview(false);
    setShowMyProfile(true);
  };

  const handleFollowingClick = () => {
    setShowProfilePreview(false);
    setShowFollowing(true);
  };

  const handleCloseFollowing = () => {
    setShowFollowing(false);
  };

  const handleFollowingProfileClick = (userId: string) => {
    setShowFollowing(false);
    handleProfileClick(userId);
  };

  // Filter users based on preference
  const filteredUsers = mockUsers.filter((user) => {
    const userId = parseInt(user.id);
    const isMale = userId >= 101;
    const isFemale = userId <= 100;
    
    if (interestedIn === 'Everyone') return true;
    if (interestedIn === 'Men') return isMale;
    if (interestedIn === 'Women') return isFemale;
    return true;
  });

  const selectedUser = selectedUserId
    ? mockUsers.find((user) => user.id === selectedUserId)
    : null;

  const unreadMessagesCount = mockConversations.reduce(
    (sum, conv) => sum + conv.unreadCount,
    0
  );
  
  const unreadNotificationsCount = notifications.filter(n => !n.isRead).length;

  return (
    <div>
      {appState === 'welcome' && (
        <WelcomeScreen 
          onGetStarted={() => setAppState('onboarding')} 
          onLogin={() => alert('Login')} 
        />
      )}

      {appState === 'onboarding' && (
        <OnboardingFlow 
          onComplete={handleOnboardingComplete} 
          isQuickStart={true}
        />
      )}

      {appState === 'browse' && (
        <BrowseView
          users={filteredUsers}
          onProfileClick={handleProfileClick}
          onVibeClick={handleVibeClick}
          onNotificationsClick={handleNotificationsClick}
          onMessagesClick={handleMessagesClick}
          onMyProfileClick={handleMyProfileClick}
          unreadMessages={unreadMessagesCount}
          unreadNotifications={unreadNotificationsCount}
        />
      )}

      <AnimatePresence>
        {selectedUser && (
          <ProfileDetail 
            user={selectedUser} 
            onClose={handleCloseProfile} 
            onSendMessage={handleSendMessageToUser} 
            onFollow={handleFollow} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVibeEditor && (
          <VibeEditor
            currentVibe={userVibe}
            onSave={handleVibeSave}
            onClose={() => setShowVibeEditor(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showNotifications && (
          <NotificationsView
            onClose={handleCloseNotifications}
            followedUsers={followedUsers}
            onProfileClick={handleProfileClick}
            notifications={notifications}
            onMarkAsRead={handleMarkNotificationsAsRead}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMessages && (
          <MessagesView
            onClose={handleCloseMessages}
            onViewProfile={handleProfileClick}
            initialUserId={messageToUserId || undefined}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMyProfile && (
          <MyProfileView
            onClose={handleCloseMyProfile}
            userId="current-user"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFullOnboarding && (
          <SignupPrompt
            onComplete={handleOnboardingComplete}
            onClose={() => setShowFullOnboarding(false)}
            initialData={partialUserData}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showProfilePreview && (
          <ProfilePreview
            onClose={handleCloseProfilePreview}
            onEdit={handleEditProfile}
            onFollowingClick={handleFollowingClick}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFollowing && (
          <FollowingView
            onClose={handleCloseFollowing}
            following={followedUsers}
            followers={followers}
            onUserClick={handleFollowingProfileClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}