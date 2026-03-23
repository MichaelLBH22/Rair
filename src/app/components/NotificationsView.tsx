import { motion } from 'motion/react';
import { X, Sparkles, Clock } from 'lucide-react';
import { User } from '../data/mockUsers';
import { Notification } from '../App';
import React from 'react';

interface NotificationsViewProps {
  onClose: () => void;
  followedUsers: User[];
  onProfileClick: (userId: string) => void;
  notifications: Notification[];
  onMarkAsRead?: () => void;
}

export function NotificationsView({ onClose, followedUsers, onProfileClick, notifications, onMarkAsRead }: NotificationsViewProps) {
  // Mark all as read when opened - only run once on mount
  React.useEffect(() => {
    if (onMarkAsRead) {
      onMarkAsRead();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-8 md:right-8 z-10 p-2 md:p-3 bg-neutral-100 hover:bg-neutral-200 transition-colors"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="min-h-screen px-4 py-12 md:px-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Connections
            </h1>
            <p
              className="text-neutral-600 max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', lineHeight: 1.6 }}
            >
              See when people you follow come online or shift into a vibe that matches yours
            </p>
          </div>

          {/* Notifications */}
          <div className="space-y-6">
            <h2
              className="text-neutral-400 mb-6 md:mb-8"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              Recent Activity
            </h2>

            <div className="space-y-3 md:space-y-4">
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group cursor-pointer"
                  onClick={() => onProfileClick(notification.user.id)}
                >
                  <div className="flex items-start gap-3 md:gap-6 p-3 md:p-6 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 transition-colors">
                    {/* Profile image */}
                    <div className="relative w-12 h-12 md:w-20 md:h-20 flex-shrink-0">
                      <img
                        src={notification.user.images[0]}
                        alt={notification.user.name}
                        className="w-full h-full object-cover"
                      />
                      {notification.user.isOnline && (
                        <div className="absolute -bottom-0.5 -right-0.5 md:-bottom-1 md:-right-1 w-4 h-4 md:w-5 md:h-5 bg-green-400 border-2 border-white rounded-full" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-2 md:space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem, 2vw, 1.125rem)', fontWeight: 500 }}>
                            <span>{notification.user.name}</span>
                            <span className="text-neutral-600 font-normal"> {notification.message}</span>
                          </p>
                        </div>
                        <span 
                          className="text-neutral-400 flex items-center gap-1.5 flex-shrink-0 whitespace-nowrap"
                          style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem' }}
                        >
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          {notification.timestamp}
                        </span>
                      </div>

                      {notification.type === 'vibe_change' && (
                        <div className="inline-flex items-center gap-1.5 md:gap-2 bg-black text-white px-3 md:px-4 py-1.5 md:py-2">
                          <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500 }}>
                            {notification.user.currentVibe}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Following Section */}
          <div className="space-y-6 pt-8 md:pt-12 border-t border-neutral-200">
            <h2
              className="text-neutral-400"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: 500
              }}
            >
              People You Follow
            </h2>

            <p
              className="text-neutral-600"
              style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', lineHeight: 1.6 }}
            >
              You'll be notified when these people come online or their vibe aligns with yours
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {followedUsers.slice(0, 8).map((user) => (
                <motion.div
                  key={user.id}
                  whileHover={{ y: -4 }}
                  className="cursor-pointer group"
                  onClick={() => onProfileClick(user.id)}
                >
                  <div className="relative aspect-[3/4] mb-3 overflow-hidden bg-neutral-100">
                    <img
                      src={user.images[0]}
                      alt={user.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {user.isOnline && (
                      <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                    )}
                  </div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500 }}>
                    {user.name}
                  </p>
                  <p className="text-neutral-500" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                    {user.currentVibe}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}