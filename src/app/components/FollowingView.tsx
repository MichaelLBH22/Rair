import { motion } from 'motion/react';
import { X, Sparkles, MapPin } from 'lucide-react';
import { User } from '../data/mockUsers';

interface FollowingViewProps {
  onClose: () => void;
  following: User[];
  followers: User[];
  onUserClick: (userId: string) => void;
}

export function FollowingView({ onClose, following, followers, onUserClick }: FollowingViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-neutral-200 px-4 md:px-12 py-4 md:py-6 flex items-center justify-between z-10">
        <button
          onClick={onClose}
          className="p-2 md:p-3 hover:bg-neutral-100 transition-colors flex-shrink-0"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <h1
          className="flex-1 text-center mx-2"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
            fontWeight: 400
          }}
        >
          My Connections
        </h1>

        <div className="w-[40px] md:w-[52px]" /> {/* Spacer for alignment */}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Following Section */}
        <section className="space-y-6">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400
              }}
            >
              Following
            </h2>
            <p
              className="text-neutral-500 mt-2"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem'
              }}
            >
              {following.length} {following.length === 1 ? 'person' : 'people'}
            </p>
          </div>

          {following.length > 0 ? (
            <div className="grid gap-4">
              {following.map((user) => (
                <button
                  key={user.id}
                  onClick={() => onUserClick(user.id)}
                  className="flex items-start gap-4 p-4 border border-neutral-200 hover:border-neutral-400 transition-all text-left group"
                >
                  {/* Profile Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden bg-neutral-100">
                    <img
                      src={user.images[0]}
                      alt={user.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-neutral-900"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            fontWeight: 400
                          }}
                        >
                          {user.name}, {user.age}
                        </h3>
                        <div className="flex items-center gap-1.5 text-neutral-600 mt-1">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span
                            className="truncate"
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.875rem'
                            }}
                          >
                            {user.location}
                          </span>
                        </div>
                      </div>

                      {/* Vibe Badge */}
                      <div className="inline-flex items-center gap-0.5 bg-black text-white px-2 py-0.5 flex-shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.625rem',
                            fontWeight: 500
                          }}
                        >
                          {user.vibe}
                        </span>
                      </div>
                    </div>

                    {/* Bio Preview */}
                    {user.bio && (
                      <p
                        className="text-neutral-600 line-clamp-2"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          lineHeight: 1.5
                        }}
                      >
                        {user.bio}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <p
                className="text-neutral-500"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem'
                }}
              >
                You're not following anyone yet
              </p>
              <p
                className="text-neutral-400 mt-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem'
                }}
              >
                Follow people to get notified when they come online or change their vibe
              </p>
            </div>
          )}
        </section>

        {/* Followers Section */}
        <section className="space-y-6">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400
              }}
            >
              Followers
            </h2>
            <p
              className="text-neutral-500 mt-2"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem'
              }}
            >
              {followers.length} {followers.length === 1 ? 'person' : 'people'}
            </p>
          </div>

          {followers.length > 0 ? (
            <div className="grid gap-4">
              {followers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => onUserClick(user.id)}
                  className="flex items-start gap-4 p-4 border border-neutral-200 hover:border-neutral-400 transition-all text-left group"
                >
                  {/* Profile Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden bg-neutral-100">
                    <img
                      src={user.images[0]}
                      alt={user.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* User Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-neutral-900"
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: '1.25rem',
                            fontWeight: 400
                          }}
                        >
                          {user.name}, {user.age}
                        </h3>
                        <div className="flex items-center gap-1.5 text-neutral-600 mt-1">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span
                            className="truncate"
                            style={{
                              fontFamily: 'var(--font-sans)',
                              fontSize: '0.875rem'
                            }}
                          >
                            {user.location}
                          </span>
                        </div>
                      </div>

                      {/* Vibe Badge */}
                      <div className="inline-flex items-center gap-0.5 bg-black text-white px-2 py-0.5 flex-shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.625rem',
                            fontWeight: 500
                          }}
                        >
                          {user.vibe}
                        </span>
                      </div>
                    </div>

                    {/* Bio Preview */}
                    {user.bio && (
                      <p
                        className="text-neutral-600 line-clamp-2"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.9375rem',
                          lineHeight: 1.5
                        }}
                      >
                        {user.bio}
                      </p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4">
              <p
                className="text-neutral-500"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem'
                }}
              >
                No followers yet
              </p>
              <p
                className="text-neutral-400 mt-2"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem'
                }}
              >
                People who follow you will appear here
              </p>
            </div>
          )}
        </section>
      </div>
    </motion.div>
  );
}
