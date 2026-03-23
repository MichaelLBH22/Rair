import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Upload, Instagram } from 'lucide-react';
import { AVAILABLE_VIBES, Vibe } from '../data/mockUsers';

interface OnboardingFlowProps {
  onComplete: (userData: any) => void;
  isQuickStart?: boolean;
  continueFromStep?: number;
  initialData?: any;
  isModal?: boolean;
}

const questions = [
  {
    id: 1,
    title: 'I am...',
    subtitle: 'Let us know how you identify',
    type: 'gender' as const,
    options: ['Man', 'Woman']
  },
  {
    id: 2,
    title: 'I\'m interested in...',
    subtitle: 'Who would you like to connect with?',
    type: 'interest' as const,
    options: ['Men', 'Women']
  },
  {
    id: 3,
    title: 'Create your account',
    subtitle: 'Set up your email and password to get started',
    type: 'account_setup' as const
  },
  {
    id: 4,
    title: 'What\'s your vibe right now?',
    subtitle: 'Choose the vibe that feels right—you can change this anytime',
    type: 'vibes' as const
  },
  {
    id: 5,
    title: 'Let\'s set up your profile',
    subtitle: 'Just a few more details to get started',
    type: 'profile_setup' as const
  }
  // Archived questions for future profile editing:
  // - What brings you here tonight?
  // - Tell us how you see yourself
  // - What gets you excited?
  // - What are you open to exploring?
];

export function OnboardingFlow({ onComplete, isQuickStart, continueFromStep, initialData, isModal }: OnboardingFlowProps) {
  const [currentStep, setCurrentStep] = useState(continueFromStep || 0);
  const [answers, setAnswers] = useState<Record<number, any>>(initialData || {});
  const [selectedVibe, setSelectedVibe] = useState<Vibe | null>(initialData?.vibe || null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string | null>(initialData?.gender || null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(initialData?.interestedIn || null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileName, setProfileName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [instagramConnected, setInstagramConnected] = useState(false);

  const currentQuestion = questions[currentStep];
  // In quick start mode, only show first 2 questions (gender + interest)
  const totalSteps = isQuickStart ? 2 : questions.length;
  const isLastStep = currentStep === totalSteps - 1;

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete({
        ...answers,
        email,
        password,
        gender: selectedGender,
        interestedIn: selectedInterest,
        vibe: selectedVibe,
        openTo: selectedOptions,
        name: profileName,
        photo: profilePhoto,
        instagramConnected,
        isFullyOnboarded: !isQuickStart
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleTextChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const toggleOption = (option: string) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInstagramConnect = () => {
    // Simulate Instagram connection
    setInstagramConnected(true);
  };

  const canProceed = () => {
    if (currentQuestion.type === 'textarea') {
      return answers[currentQuestion.id]?.trim().length > 0;
    }
    if (currentQuestion.type === 'vibes') {
      return selectedVibe !== null;
    }
    if (currentQuestion.type === 'checkboxes') {
      return selectedOptions.length > 0;
    }
    if (currentQuestion.type === 'gender') {
      return selectedGender !== null;
    }
    if (currentQuestion.type === 'interest') {
      return selectedInterest !== null;
    }
    if (currentQuestion.type === 'account_setup') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email.trim().length > 0 && 
             emailRegex.test(email) &&
             password.length >= 6 && 
             password === confirmPassword;
    }
    if (currentQuestion.type === 'profile_setup') {
      return profileName.trim().length > 0 && profilePhoto !== null && instagramConnected;
    }
    return true;
  };

  return (
    <div className={isModal ? "h-full bg-white flex flex-col" : "min-h-screen bg-white flex flex-col"}>
      {/* Progress bar */}
      <div className="w-full h-[2px] bg-neutral-200">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className={isModal ? "flex-1 flex flex-col items-center justify-center px-6 py-6 overflow-y-auto" : "flex-1 flex flex-col items-center justify-center px-8 py-16"}>
        <div className={isModal ? "w-full" : "max-w-3xl w-full"}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: isModal ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: isModal ? -10 : -20 }}
              transition={{ duration: isModal ? 0.3 : 0.4 }}
              className={isModal ? "space-y-6" : "space-y-12"}
            >
              {/* Question */}
              <div className={isModal ? "space-y-2 text-center" : "space-y-6 text-center"}>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: isModal ? '1.5rem' : 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 400,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {currentQuestion.title}
                </h2>
                <p
                  className={isModal ? "text-neutral-600" : "text-neutral-600 max-w-xl mx-auto"}
                  style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? '0.75rem' : '1.125rem', lineHeight: isModal ? 1.4 : 1.6 }}
                >
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Answer input */}
              <div className={isModal ? "pt-2" : "pt-8"}>
                {currentQuestion.type === 'textarea' && (
                  <textarea
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    className="w-full min-h-[120px] p-4 bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none resize-none transition-colors text-sm"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    autoFocus
                  />
                )}

                {currentQuestion.type === 'vibes' && (
                  <div className="grid grid-cols-2 gap-2">
                    {AVAILABLE_VIBES.map((vibe) => (
                      <button
                        key={vibe}
                        onClick={() => setSelectedVibe(vibe)}
                        className={`p-3 transition-all text-sm ${
                          selectedVibe === vibe
                            ? 'bg-black text-white'
                            : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        {vibe}
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'checkboxes' && (
                  <div className="space-y-3 max-w-2xl mx-auto">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleOption(option)}
                        className={`w-full p-6 text-left transition-all ${
                          selectedOptions.includes(option)
                            ? 'bg-black text-white'
                            : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '1.125rem', fontWeight: 500 }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'gender' && (
                  <div className={isModal ? "grid grid-cols-2 gap-2" : "grid grid-cols-2 gap-4 max-w-2xl mx-auto"}>
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedGender(option)}
                        className={`${isModal ? 'p-3' : 'p-6'} transition-all ${isModal ? 'text-sm' : ''} ${
                          selectedGender === option
                            ? 'bg-black text-white'
                            : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? undefined : '1.125rem', fontWeight: 500 }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'interest' && (
                  <div className={isModal ? "grid grid-cols-2 gap-2" : "grid grid-cols-2 gap-4 max-w-2xl mx-auto"}>
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedInterest(option)}
                        className={`${isModal ? 'p-3' : 'p-6'} transition-all ${isModal ? 'text-sm' : ''} ${
                          selectedInterest === option
                            ? 'bg-black text-white'
                            : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? undefined : '1.125rem', fontWeight: 500 }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {currentQuestion.type === 'profile_setup' && (
                  <div className="space-y-3">
                    {/* Name Input */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                        autoFocus
                      />
                    </div>

                    {/* Photo Upload */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Profile Photo
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="profilePhotoUpload"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => document.getElementById('profilePhotoUpload')?.click()}
                          className={`w-full p-3 flex items-center justify-center gap-2 transition-all text-sm ${
                            profilePhoto 
                              ? 'bg-black text-white' 
                              : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                          }`}
                          style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                        >
                          <Upload className="w-4 h-4" />
                          {profilePhoto ? 'Photo uploaded ✓' : 'Upload a photo'}
                        </button>
                      </div>
                    </div>

                    {/* Instagram Connection */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Verify with Instagram
                      </label>
                      <button
                        type="button"
                        onClick={handleInstagramConnect}
                        className={`w-full p-3 flex items-center justify-center gap-2 transition-all text-sm ${
                          instagramConnected 
                            ? 'bg-black text-white' 
                            : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                        }`}
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        <Instagram className="w-4 h-4" />
                        {instagramConnected ? 'Instagram connected ✓' : 'Connect Instagram'}
                      </button>
                      <p 
                        className="mt-2 text-neutral-500 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', lineHeight: 1.4 }}
                      >
                        We verify via Instagram, but your profile won't be shown live unless you choose.
                      </p>
                    </div>
                  </div>
                )}

                {currentQuestion.type === 'account_setup' && (
                  <div className="space-y-3">
                    {/* Email Input */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                        autoFocus
                      />
                    </div>

                    {/* Password Input */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                      {password && password.length < 6 && (
                        <p className="mt-1 text-neutral-500 text-left text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                          Password must be at least 6 characters
                        </p>
                      )}
                    </div>

                    {/* Confirm Password Input */}
                    <div>
                      <label 
                        className="block text-neutral-700 mb-1 text-left text-xs"
                        style={{ fontFamily: 'var(--font-sans)', fontWeight: 500 }}
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full px-3 py-2 text-sm bg-neutral-50 border border-neutral-200 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none transition-colors"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      />
                      {confirmPassword && password !== confirmPassword && (
                        <p className="mt-1 text-neutral-500 text-left text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                          Passwords do not match
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className={isModal ? "border-t border-neutral-200 px-4 py-3" : "border-t border-neutral-200 px-8 py-8"}>
        <div className={isModal ? "flex items-center justify-between" : "max-w-3xl mx-auto flex items-center justify-between"}>
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={isModal ? "flex items-center gap-1 text-neutral-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-sm" : "flex items-center gap-2 text-neutral-600 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"}
            style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? undefined : '1rem' }}
          >
            <ChevronLeft className={isModal ? "w-4 h-4" : "w-5 h-5"} />
            Back
          </button>

          <span className={isModal ? "text-neutral-400 text-xs" : "text-neutral-400"} style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? undefined : '0.875rem' }}>
            {currentStep + 1} of {totalSteps}
          </span>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={isModal ? "flex items-center gap-1 bg-black text-white px-5 py-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors text-sm" : "flex items-center gap-2 bg-black text-white px-10 py-4 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-800 transition-colors"}
            style={{ fontFamily: 'var(--font-sans)', fontSize: isModal ? undefined : '1rem', fontWeight: 600 }}
          >
            {isLastStep ? 'Complete' : 'Continue'}
            <ChevronRight className={isModal ? "w-4 h-4" : "w-5 h-5"} />
          </button>
        </div>
      </div>
    </div>
  );
}