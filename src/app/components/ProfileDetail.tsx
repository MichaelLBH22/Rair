import { useState } from 'react';
import { User } from '../data/mockUsers';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Sparkles, Heart, MessageCircle, UserX } from 'lucide-react';

interface ProfileDetailProps {
  user: User;
  onClose: () => void;
  onSendMessage?: (userId: string) => void;
  onFollow?: (user: User) => void;
}

export function ProfileDetail({ user, onClose, onSendMessage, onFollow }: ProfileDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showMessageAlert, setShowMessageAlert] = useState(false);
  const [showGhostConfirm, setShowGhostConfirm] = useState(false);
  const [showInviteOutModal, setShowInviteOutModal] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [selectedInviteType, setSelectedInviteType] = useState<string>('');
  const [showRequestAccessModal, setShowRequestAccessModal] = useState(false);
  const [requestAccessSuccess, setRequestAccessSuccess] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % user.images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + user.images.length) % user.images.length);
  };
  
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
    if (!isFollowing && onFollow) {
      onFollow(user);
    }
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
        className="fixed top-8 right-8 z-50 p-2 bg-neutral-100 hover:bg-neutral-200 transition-colors"
      >
        <X className="w-4 h-4" />
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

          {/* Online indicator */}
          {user.isOnline && (
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-black/80 backdrop-blur-sm text-white px-5 py-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', letterSpacing: '0.1em' }}>
                ONLINE NOW
              </span>
            </div>
          )}

          {/* Header Info - Overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-4xl">
              {/* Name & Location */}
              <h1
                className="text-white mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                {user.name}, {user.age}
              </h1>
              <div className="flex items-center gap-3 text-white/80 mb-8">
                <MapPin className="w-5 h-5" />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem' }}>
                  {user.location}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-row gap-2 md:gap-4 justify-center px-2 md:px-0">
                <button
                  onClick={handleFollowClick}
                  className={`flex items-center justify-center gap-1.5 md:gap-3 px-3 md:px-8 py-3 md:py-4 transition-all flex-1 md:flex-initial ${
                    isFollowing
                      ? 'bg-black text-white'
                      : 'bg-white/90 text-black hover:bg-white'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500 }}
                >
                  <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isFollowing ? 'fill-current' : ''}`} />
                  <span className="whitespace-nowrap">{isFollowing ? 'Following' : 'Follow'}</span>
                </button>
                <button
                  onClick={() => {
                    setShowMessageAlert(true);
                  }}
                  className="flex items-center justify-center gap-1.5 md:gap-3 bg-white/90 text-black px-3 md:px-8 py-3 md:py-4 hover:bg-white transition-colors flex-1 md:flex-initial"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500 }}
                >
                  <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="whitespace-nowrap">Message</span>
                </button>
                <button
                  onClick={() => {
                    setShowInviteOutModal(true);
                  }}
                  className="flex items-center justify-center gap-1.5 md:gap-3 bg-white/90 text-black px-3 md:px-8 py-3 md:py-4 hover:bg-white transition-colors flex-1 md:flex-initial"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 500 }}
                >
                  <span className="whitespace-nowrap">Invite Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white px-12 py-20">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Stats */}
            <div className="space-y-8">
              <h3
                className="text-neutral-400"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Stats
              </h3>
              <div className="flex gap-8">
                <div className="flex flex-col gap-2">
                  <span
                    className="text-neutral-500"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Height
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.5rem',
                      fontWeight: 300
                    }}
                  >
                    {user.height}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span
                    className="text-neutral-500"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Weight
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.5rem',
                      fontWeight: 300
                    }}
                  >
                    {user.weight}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-8">
              <h3
                className="text-neutral-400"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                About
              </h3>
              
              {/* Request Access Button */}
              <div className="flex justify-center py-8">
                <button
                  onClick={() => setShowRequestAccessModal(true)}
                  className="bg-black text-white px-12 py-4 hover:bg-neutral-800 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  Request Access
                </button>
              </div>
            </div>

            {/* Prompts */}
            {user.prompts.map((prompt, index) => (
              <div key={index} className="space-y-6">
                <h4
                  className="text-neutral-500"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 400,
                    fontStyle: 'italic'
                  }}
                >
                  {prompt.question}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.375rem',
                    lineHeight: 1.6,
                    fontWeight: 300
                  }}
                >
                  {prompt.answer}
                </p>
              </div>
            ))}

            {/* Interests */}
            <div className="space-y-8">
              <h3
                className="text-neutral-400"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-neutral-50 border border-neutral-200"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1rem'
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Ghost Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={() => setShowGhostConfirm(true)}
                className="flex items-center gap-3 bg-white text-black px-8 py-4 border border-neutral-300 hover:bg-neutral-50 transition-colors"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 500 }}
              >
                <UserX className="w-5 h-5" />
                Ghost
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Message Alert Modal */}
      <AnimatePresence>
        {showMessageAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMessageAlert(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Not Yet Available
              </h3>
              <p
                className="text-neutral-600 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                We're sorry but this feature is not yet active for you.
              </p>
              <button
                onClick={() => setShowMessageAlert(false)}
                className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ghost Confirmation Modal */}
      <AnimatePresence>
        {showGhostConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowGhostConfirm(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <p
                className="text-neutral-900 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  fontWeight: 400,
                }}
              >
                You will no longer receive messages from this user
              </p>
              <button
                onClick={() => setShowGhostConfirm(false)}
                className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                OK
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invite Out Modal */}
      <AnimatePresence>
        {showInviteOutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInviteOutModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Invite {user.name} Out
              </h3>
              <p
                className="text-neutral-600 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                What would you like to do?
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => {
                    setSelectedInviteType('Coffee');
                    setInviteSuccess(true);
                    setShowInviteOutModal(false);
                  }}
                  className="flex items-center justify-center bg-white text-black px-6 py-6 border-2 border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}
                >
                  Coffee
                </button>
                <button
                  onClick={() => {
                    setSelectedInviteType('Drinks');
                    setInviteSuccess(true);
                    setShowInviteOutModal(false);
                  }}
                  className="flex items-center justify-center bg-white text-black px-6 py-6 border-2 border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}
                >
                  Drinks
                </button>
                <button
                  onClick={() => {
                    setSelectedInviteType('Dinner');
                    setInviteSuccess(true);
                    setShowInviteOutModal(false);
                  }}
                  className="flex items-center justify-center bg-white text-black px-6 py-6 border-2 border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}
                >
                  Dinner
                </button>
                <button
                  onClick={() => {
                    setSelectedInviteType('Let\'s Travel');
                    setInviteSuccess(true);
                    setShowInviteOutModal(false);
                  }}
                  className="flex items-center justify-center bg-white text-black px-6 py-6 border-2 border-neutral-200 hover:border-black hover:bg-neutral-50 transition-all"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.125rem',
                    fontWeight: 500,
                  }}
                >
                  Let's Travel
                </button>
              </div>
              <button
                onClick={() => setShowInviteOutModal(false)}
                className="w-full bg-neutral-100 text-black px-8 py-4 hover:bg-neutral-200 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                }}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invite Out Success Modal */}
      <AnimatePresence>
        {inviteSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setInviteSuccess(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Invite Sent
              </h3>
              <p
                className="text-neutral-600 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Your invite for {selectedInviteType.toLowerCase()} with {user.name} has been sent to their message inbox.
              </p>
              <button
                onClick={() => setInviteSuccess(false)}
                className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request Access Modal */}
      <AnimatePresence>
        {showRequestAccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRequestAccessModal(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Request Access
              </h3>
              <p
                className="text-neutral-600 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                You're requesting access to {user.name}'s personal information, including their Instagram, job details, and an interesting fact about them. They'll be notified and can choose to grant access.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setRequestAccessSuccess(true);
                    setShowRequestAccessModal(false);
                  }}
                  className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                  }}
                >
                  Send Request
                </button>
                <button
                  onClick={() => setShowRequestAccessModal(false)}
                  className="w-full bg-neutral-100 text-black px-8 py-4 hover:bg-neutral-200 transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                  }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request Access Success Modal */}
      <AnimatePresence>
        {requestAccessSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRequestAccessSuccess(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-lg w-full p-12 shadow-2xl"
            >
              <h3
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                Request Sent
              </h3>
              <p
                className="text-neutral-600 mb-8"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.125rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                Your access request has been sent to {user.name}. You'll be notified when they respond.
              </p>
              <button
                onClick={() => setRequestAccessSuccess(false)}
                className="w-full bg-black text-white px-8 py-4 hover:bg-neutral-800 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                Got It
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}