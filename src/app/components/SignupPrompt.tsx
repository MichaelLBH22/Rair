import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { OnboardingFlow } from './OnboardingFlow';

interface SignupPromptProps {
  onComplete: (userData: any) => void;
  onClose: () => void;
  initialData?: any;
}

export function SignupPrompt({ onComplete, onClose, initialData }: SignupPromptProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative bg-white w-80 h-[28rem] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-neutral-100 transition-colors rounded-full"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto h-full">
          <OnboardingFlow
            onComplete={onComplete}
            isQuickStart={false}
            continueFromStep={2}
            initialData={initialData}
            isModal={true}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}