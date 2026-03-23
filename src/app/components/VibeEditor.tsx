import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Check } from 'lucide-react';
import { AVAILABLE_VIBES, Vibe } from '../data/mockUsers';

interface VibeEditorProps {
  currentVibe: Vibe;
  onSave: (vibe: Vibe) => void;
  onClose: () => void;
}

const vibeDescriptions: Record<Vibe, string> = {
  'Playful': 'Fun, flirty, and up for anything',
  'Bold & Direct': 'No games—just real intentions',
  'Open to Adventure': 'Ready for spontaneous experiences',
  'Feeling Generous': 'Love treating the right person',
  'Low-Key Curious': 'Taking it slow, seeing what happens',
  'Looking to Travel': 'Ready to explore new places',
  'Confidently Sexy': 'Own it. No apologies.',
  'Open to Spoiling': 'Appreciate being treated well',
  'Just Exploring': 'Open-minded, no pressure',
  'Ready to Connect': 'Looking for something real'
};

export function VibeEditor({ currentVibe, onSave, onClose }: VibeEditorProps) {
  const [selectedVibe, setSelectedVibe] = useState<Vibe>(currentVibe);
  const [hoveredVibe, setHoveredVibe] = useState<Vibe | null>(null);

  const handleSave = () => {
    onSave(selectedVibe);
    onClose();
  };

  const displayVibe = hoveredVibe || selectedVibe;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-10 p-3 bg-neutral-100 hover:bg-neutral-200 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="h-screen flex flex-col">
        {/* Header - Fixed */}
        <div className="px-12 pt-16 pb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
              <Sparkles className="w-12 h-12" />
              <h1
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                What's Your Vibe?
              </h1>
            </div>
            <p
              className="text-neutral-600 max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '1.25rem', lineHeight: 1.6 }}
            >
              Let people know what you're feeling right now. You can change this anytime.
            </p>
          </div>
        </div>

        {/* Current Selection Display */}
        <div className="flex-1 flex items-center justify-center px-12 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={displayVibe}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="text-center space-y-6"
            >
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(3rem, 8vw, 6rem)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                {displayVibe}
              </h2>
              <p
                className="text-neutral-500"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.5rem',
                  fontWeight: 300
                }}
              >
                {vibeDescriptions[displayVibe]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Vibe Grid - Fixed Bottom */}
        <div className="px-12 pb-12">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {AVAILABLE_VIBES.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setSelectedVibe(vibe)}
                  onMouseEnter={() => setHoveredVibe(vibe)}
                  onMouseLeave={() => setHoveredVibe(null)}
                  className={`relative p-6 transition-all ${
                    selectedVibe === vibe
                      ? 'bg-black text-white'
                      : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                  }`}
                >
                  <span 
                    className="block"
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '0.9375rem', 
                      fontWeight: 500,
                      textAlign: 'center'
                    }}
                  >
                    {vibe}
                  </span>
                  {selectedVibe === vibe && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <Check className="w-4 h-4" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
              <p
                className="text-neutral-400"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }}
              >
                People you follow will be notified when your vibe aligns with theirs
              </p>
              
              <button
                onClick={handleSave}
                className="bg-black text-white px-10 py-4 hover:bg-neutral-800 transition-colors"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 600 }}
              >
                Update Vibe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
