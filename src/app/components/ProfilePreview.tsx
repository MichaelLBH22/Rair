import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Pencil, Users } from 'lucide-react';

interface ProfilePreviewProps {
  onClose: () => void;
  onEdit: () => void;
  onFollowingClick: () => void;
}

// Mock user data representing the current user's profile
const mockCurrentUserProfile = {
  name: 'Alex',
  age: 28,
  location: 'Brooklyn, NY',
  height: '5\'10"',
  weight: '160 lbs',
  bio: 'Living life authentically and looking for genuine connections.',
  currentVibe: 'Chill',
  images: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&fit=crop'
  ],
  prompts: {
    whyHere: '',
    aboutMe: '',
    excitedBy: '',
    openTo: [] as string[]
  }
};

export function ProfilePreview({ onClose, onEdit, onFollowingClick }: ProfilePreviewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const user = mockCurrentUserProfile;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % user.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + user.images.length) % user.images.length);
  };

  const handleFollowingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFollowingClick();
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 p-3 bg-neutral-100 hover:bg-neutral-200 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[1600px] mx-auto"
      >
        {/* Hero Image Section */}
        <div className="relative h-screen">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={user.images[currentImageIndex]}
              alt={`${user.name} ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Image navigation */}
          {user.images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-8 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-8 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Image indicators */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
                {user.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'w-12 bg-white'
                        : 'w-8 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Profile info overlay - bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="max-w-4xl">
              {/* Name & Age */}
              <h1
                className="text-white mb-3"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                  letterSpacing: '-0.02em'
                }}
              >
                {user.name}, {user.age}
              </h1>

              {/* Location */}
              <div className="flex items-center gap-2 text-white/90 mb-6">
                <MapPin className="w-5 h-5" />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem' }}>
                  {user.location}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 md:gap-3">
                <button
                  onClick={handleEditClick}
                  className="flex items-center gap-1.5 md:gap-2 bg-white text-black px-4 md:px-6 py-3 hover:bg-neutral-100 transition-colors flex-1 md:flex-none justify-center"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </button>

                <button
                  onClick={handleFollowingClick}
                  className="flex items-center gap-1.5 md:gap-2 bg-white text-black px-4 md:px-6 py-3 hover:bg-neutral-100 transition-colors flex-1 md:flex-none justify-center"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  <Users className="w-4 h-4" />
                  My Following
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="bg-white px-8 md:px-12 py-16 md:py-24">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 pb-8 border-b border-neutral-200">
              <div>
                <p className="text-neutral-500 mb-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                  Height
                </p>
                <p className="text-neutral-900" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 500 }}>
                  {user.height}
                </p>
              </div>
              <div>
                <p className="text-neutral-500 mb-1" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                  Weight
                </p>
                <p className="text-neutral-900" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 500 }}>
                  {user.weight}
                </p>
              </div>
            </div>

            {/* Bio */}
            {user.bio && (
              <div className="space-y-4">
                <h2
                  className="text-neutral-900"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    fontWeight: 400
                  }}
                >
                  About
                </h2>
                <p
                  className="text-neutral-700 leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    lineHeight: 1.8
                  }}
                >
                  {user.bio}
                </p>
              </div>
            )}

            {/* Profile Prompts */}
            {(user.prompts.whyHere || user.prompts.aboutMe || user.prompts.excitedBy || user.prompts.openTo.length > 0) && (
              <div className="space-y-12">
                {user.prompts.whyHere && (
                  <div className="space-y-4">
                    <h3
                      className="text-neutral-900"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 400
                      }}
                    >
                      What brings you here tonight?
                    </h3>
                    <p
                      className="text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        lineHeight: 1.8
                      }}
                    >
                      {user.prompts.whyHere}
                    </p>
                  </div>
                )}

                {user.prompts.aboutMe && (
                  <div className="space-y-4">
                    <h3
                      className="text-neutral-900"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 400
                      }}
                    >
                      Tell us how you see yourself
                    </h3>
                    <p
                      className="text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        lineHeight: 1.8
                      }}
                    >
                      {user.prompts.aboutMe}
                    </p>
                  </div>
                )}

                {user.prompts.excitedBy && (
                  <div className="space-y-4">
                    <h3
                      className="text-neutral-900"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 400
                      }}
                    >
                      What gets you excited?
                    </h3>
                    <p
                      className="text-neutral-700 leading-relaxed"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.125rem',
                        lineHeight: 1.8
                      }}
                    >
                      {user.prompts.excitedBy}
                    </p>
                  </div>
                )}

                {user.prompts.openTo.length > 0 && (
                  <div className="space-y-4">
                    <h3
                      className="text-neutral-900"
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 400
                      }}
                    >
                      What are you open to exploring?
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {user.prompts.openTo.map((item) => (
                        <span
                          key={item}
                          className="px-5 py-2.5 bg-neutral-100 border border-neutral-200"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.9375rem'
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Empty state message */}
            {!user.prompts.whyHere && !user.prompts.aboutMe && !user.prompts.excitedBy && user.prompts.openTo.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-500 mb-6" style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem' }}>
                  Your profile is looking a bit empty
                </p>
                <button
                  onClick={onEdit}
                  className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600
                  }}
                >
                  <Pencil className="w-5 h-5" />
                  Complete Your Profile
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}