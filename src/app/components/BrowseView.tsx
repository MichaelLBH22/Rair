import { User } from '../data/mockUsers';
import { ProfileCard } from './ProfileCard';
import { Bell, MessageCircle, User as UserIcon, Search, MapPin } from 'lucide-react';
import { useState } from 'react';
import { TheScene } from './TheScene';

interface BrowseViewProps {
  users: User[];
  onProfileClick: (userId: string) => void;
  onVibeClick: () => void;
  onNotificationsClick: () => void;
  onMessagesClick: () => void;
  onMyProfileClick: () => void;
  unreadMessages: number;
  unreadNotifications?: number;
}

export function BrowseView({ users, onProfileClick, onVibeClick, onNotificationsClick, onMessagesClick, onMyProfileClick, unreadMessages, unreadNotifications = 0 }: BrowseViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [viewMode, setViewMode] = useState<'browse' | 'scene' | 'whosout'>('browse');

  // Filter users based on search query
  const filteredUsers = users.filter((user) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.location.toLowerCase().includes(query) ||
      user.currentVibe.toLowerCase().includes(query) ||
      user.bio.toLowerCase().includes(query)
    );
  });

  // Filter users based on view mode
  const displayedUsers = viewMode === 'whosout' 
    ? filteredUsers.filter(user => user.isOut) 
    : viewMode === 'browse' 
    ? filteredUsers 
    : [];

  return (
    <div className="min-h-screen bg-white md:bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
            <div></div>
            
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.875rem',
                fontWeight: 400,
                letterSpacing: '0.75em',
                paddingLeft: '0.75em'
              }}
              className="text-center"
            >
              RAIR
            </h1>

            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={onMessagesClick}
                className="p-3 hover:bg-neutral-100 transition-colors rounded-full relative"
              >
                <MessageCircle className="w-6 h-6" strokeWidth={2} />
                {unreadMessages > 0 && (
                  <div className="absolute top-0.5 right-0.5 min-w-[20px] h-[20px] bg-black text-white rounded-full flex items-center justify-center px-1">
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600 }}>
                      {unreadMessages > 9 ? '9+' : unreadMessages}
                    </span>
                  </div>
                )}
              </button>

              <button
                onClick={onNotificationsClick}
                className="p-3 hover:bg-neutral-100 transition-colors rounded-full relative"
              >
                <Bell className="w-6 h-6" strokeWidth={2} />
                {unreadNotifications > 0 && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>

              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-3 hover:bg-neutral-100 transition-colors rounded-full"
              >
                <Search className="w-6 h-6" strokeWidth={2} />
              </button>
              
              <button
                onClick={onMyProfileClick}
                className="p-3 hover:bg-neutral-100 transition-colors rounded-full"
              >
                <UserIcon className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden flex items-center justify-between">
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.375rem',
                fontWeight: 400,
                letterSpacing: '0.75em',
                paddingLeft: '0.75em'
              }}
            >
              RAIR
            </h1>

            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 md:p-3 hover:bg-neutral-100 transition-colors rounded-full"
              >
                <Search className="w-6 h-6" strokeWidth={2} />
              </button>

              <button
                onClick={onMessagesClick}
                className="p-2 md:p-3 hover:bg-neutral-100 transition-colors rounded-full relative"
              >
                <MessageCircle className="w-6 h-6" strokeWidth={2} />
                {unreadMessages > 0 && (
                  <div className="absolute top-0 md:top-0.5 right-0 md:right-0.5 min-w-[20px] h-[20px] bg-black text-white rounded-full flex items-center justify-center px-1">
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 600 }}>
                      {unreadMessages > 9 ? '9+' : unreadMessages}
                    </span>
                  </div>
                )}
              </button>

              <button
                onClick={onNotificationsClick}
                className="p-2 md:p-3 hover:bg-neutral-100 transition-colors rounded-full relative"
              >
                <Bell className="w-6 h-6" strokeWidth={2} />
                {unreadNotifications > 0 && (
                  <div className="absolute top-1.5 md:top-2 right-1.5 md:right-2 w-2 h-2 bg-red-500 rounded-full" />
                )}
              </button>
              
              <button
                onClick={onMyProfileClick}
                className="p-2 md:p-3 hover:bg-neutral-100 transition-colors rounded-full"
              >
                <UserIcon className="w-6 h-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar - Shows when toggled */}
        {showSearch && (
          <div className="px-4 md:px-6 pb-4 border-t border-neutral-200">
            <div className="max-w-7xl mx-auto">
              <div className="relative mt-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search by location, age, vibe, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-20 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem'
                  }}
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      fontWeight: 500
                    }}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* View Mode Toggle */}
        <div className="px-4 md:px-6 py-4 border-t border-neutral-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="inline-flex bg-neutral-100 p-1">
              <button
                onClick={() => setViewMode('browse')}
                className={`px-6 py-2 transition-all ${
                  viewMode === 'browse'
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-transparent text-neutral-600 hover:text-black'
                }`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em'
                }}
              >
                BROWSE
              </button>
              <button
                onClick={() => setViewMode('scene')}
                className={`px-6 py-2 transition-all ${
                  viewMode === 'scene'
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-transparent text-neutral-600 hover:text-black'
                }`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em'
                }}
              >
                THE SCENE
              </button>
              <button
                onClick={() => setViewMode('whosout')}
                className={`px-6 py-2 transition-all ${
                  viewMode === 'whosout'
                    ? 'bg-white text-black shadow-sm'
                    : 'bg-transparent text-neutral-600 hover:text-black'
                }`}
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em'
                }}
              >
                WHO'S OUT
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Grid of Profile Cards */}
      <main className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-12">
        {viewMode === 'scene' ? (
          <TheScene onProfileClick={onProfileClick} />
        ) : displayedUsers.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3
              className="text-neutral-600 mb-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.75rem',
                fontWeight: 400,
                letterSpacing: '-0.01em'
              }}
            >
              No results found
            </h3>
            <p
              className="text-neutral-500"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
            >
              Try adjusting your search terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {displayedUsers.map((user) => (
              <ProfileCard 
                key={user.id} 
                user={user} 
                onClick={() => onProfileClick(user.id)} 
                showOutLocation={viewMode === 'whosout'}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}