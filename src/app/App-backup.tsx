import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LoginScreen } from './components/LoginScreen';
import { OnboardingFlow } from './components/OnboardingFlow';
import { BrowseView } from './components/BrowseView';
import { ProfileDetail } from './components/ProfileDetail';
import { VibeEditor } from './components/VibeEditor';
import { NotificationsView } from './components/NotificationsView';
import { MessagesView } from './components/MessagesView';
import { MyProfileView } from './components/MyProfileView';
import { DebugPanel } from './components/DebugPanel';
import { ErrorBoundary } from './ErrorBoundary';
import { mockUsers, Vibe, User } from './data/mockUsers';
import { mockConversations } from './data/mockMessages';

type AppState = 'welcome' | 'login' | 'onboarding' | 'browse';

export interface Notification {
  id: string;
  user: User;
  type: 'online' | 'vibe_change' | 'profile_view' | 'follow';
  timestamp: string;
  message: string;
  isRead: boolean;
}

function AppContent() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showVibeEditor, setShowVibeEditor] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [showDebugPanel, setShowDebugPanel] = useState(false);
  const [userVibe, setUserVibe] = useState<Vibe>('Chill');
  const [interestedIn, setInterestedIn] = useState<'Men' | 'Women' | 'Everyone'>('Everyone');
  const [messageToUserId, setMessageToUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [followedUsers, setFollowedUsers] = useState<User[]>([]);

  useEffect(() => {
    console.log('App mounted successfully');
    console.log('Mock users count:', mockUsers?.length || 0);
  }, []);

  const handleGetStarted = () => {
    setAppState('onboarding');
  };

  const handleGoToLogin = () => {
    setAppState('login');
  };

  const handleBackToWelcome = () => {
    setAppState('welcome');
  };

  const handleLoginSuccess = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simple mock login - just set a mock user
    setTimeout(() => {
      setCurrentUser({
        id: 'user-1',
        name: 'You',
        email: email,
      });
      setAppState('browse');
      setIsLoading(false);
    }, 500);
  };

  const handleOnboardingComplete = async (userData: any) => {
    setIsLoading(true);
    
    // Simple mock signup - just create a mock user
    setTimeout(() => {
      setCurrentUser({
        id: 'user-1',
        name: userData.name,
        email: userData.email,
        photo: userData.photo,
        gender: userData.gender,
      });
      
      setUserVibe(userData.vibe || 'Chill');
      setInterestedIn(userData.interestedIn || 'Everyone');
      
      setAppState('browse');
      setIsLoading(false);
    }, 500);
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
  
  const handleFollow = (user: User) => {
    // Add user to followed users
    setFollowedUsers(prev => {
      if (!prev.find(u => u.id === user.id)) {
        return [...prev, user];
      }
      return prev;
    });
    
    // Generate a notification (simulating that person following you back)
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

  const handleCloseProfile = () => {
    setSelectedUserId(null);
  };

  const handleVibeClick = () => {
    setShowVibeEditor(true);
  };

  const handleVibeSave = (vibe: Vibe) => {
    setUserVibe(vibe);
  };

  const handleNotificationsClick = () => {
    setShowNotifications(true);
    setShowMessages(false);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };
  
  const handleMarkNotificationsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const handleMessagesClick = () => {
    setShowMessages(true);
    setShowNotifications(false);
  };

  const handleCloseMessages = () => {
    setShowMessages(false);
    setMessageToUserId(null);
  };

  const handleMyProfileClick = () => {
    setShowMyProfile(true);
  };

  const handleCloseMyProfile = () => {
    setShowMyProfile(false);
  };

  const handleSendMessageToUser = (userId: string) => {
    setMessageToUserId(userId);
    setShowMessages(true);
    setSelectedUserId(null);
  };

  const selectedUser = selectedUserId
    ? mockUsers.find((user) => user.id === selectedUserId)
    : null;

  // Filter users based on preference
  // IDs 1-100 are female, IDs 101+ are male
  const filteredUsers = mockUsers.filter((user) => {
    const userId = parseInt(user.id);
    const isMale = userId >= 101;
    const isFemale = userId <= 100;
    
    if (interestedIn === 'Everyone') return true;
    if (interestedIn === 'Men') return isMale;
    if (interestedIn === 'Women') return isFemale;
    return true;
  });

  // Calculate unread messages count
  const unreadMessagesCount = mockConversations.reduce(
    (sum, conv) => sum + conv.unreadCount,
    0
  );
  
  // Calculate unread notifications count
  const unreadNotificationsCount = notifications.filter(n => !n.isRead).length;

  return (
    <div style={{ fontFamily: 'var(--font-sans)' }}>
      {appState === 'welcome' && <WelcomeScreen onGetStarted={handleGetStarted} onLogin={handleGoToLogin} />}

      {appState === 'login' && <LoginScreen onBack={handleBackToWelcome} onLoginSuccess={handleLoginSuccess} />}

      {appState === 'onboarding' && <OnboardingFlow onComplete={handleOnboardingComplete} />}

      {appState === 'browse' && (
        <>
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
        </>
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white px-12 py-8 text-center">
            <div className="animate-spin w-12 h-12 border-4 border-black border-t-transparent rounded-full mx-auto mb-4"></div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem' }}>
              Creating your account...
            </p>
          </div>
        </div>
      )}

      <AnimatePresence>
        {selectedUser && <ProfileDetail user={selectedUser} onClose={handleCloseProfile} onSendMessage={handleSendMessageToUser} onFollow={handleFollow} />}
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
            userId={currentUser?.id || ''}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDebugPanel && (
          <DebugPanel
            onClose={() => setShowDebugPanel(false)}
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
