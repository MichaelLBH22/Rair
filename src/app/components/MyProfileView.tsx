import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Pencil, Sparkles, MapPin, Check } from 'lucide-react';
import { Vibe, AVAILABLE_VIBES } from '../data/mockUsers';

interface MyProfileViewProps {
  onClose: () => void;
  userId: string;
}

interface ProfileData {
  name: string;
  age: number;
  location: string;
  height: string;
  weight: string;
  bio: string;
  currentVibe: Vibe;
  photos: string[];
  prompts: {
    whyHere: string;
    aboutMe: string;
    excitedBy: string;
    openTo: string[];
  };
  privateInfo: {
    instagram: string;
    jobTitle: string;
    interestingFact: string;
  };
}

const OPEN_TO_OPTIONS = [
  'Meeting interesting people',
  'Going on adventures',
  'Casual connections',
  'Something deeper',
  'Travel & experiences',
  'Being treated well',
  'Treating someone special',
  'Just seeing what happens'
];

export function MyProfileView({ onClose, userId }: MyProfileViewProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingVibe, setEditingVibe] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Alex',
    age: 28,
    location: 'Brooklyn, NY',
    height: '5\'10"',
    weight: '160 lbs',
    bio: 'Living life authentically and looking for genuine connections.',
    currentVibe: 'Chill',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&fit=crop'
    ],
    prompts: {
      whyHere: '',
      aboutMe: '',
      excitedBy: '',
      openTo: []
    },
    privateInfo: {
      instagram: '',
      jobTitle: '',
      interestingFact: ''
    }
  });

  const [tempData, setTempData] = useState(profileData);
  const [loading, setLoading] = useState(false);

  // No backend fetch - just use mock data
  useEffect(() => {
    console.log('MyProfileView loaded with mock data');
  }, [userId]);

  const handleSave = async () => {
    try {
      setLoading(true);
      
      // Simulate save delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log('Profile saved (mock):', tempData);
      
      // Update local state
      setProfileData(tempData);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
      alert(`Failed to save profile: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const toggleOpenToOption = (option: string) => {
    setTempData(prev => ({
      ...prev,
      prompts: {
        ...prev.prompts,
        openTo: prev.prompts.openTo.includes(option)
          ? prev.prompts.openTo.filter(o => o !== option)
          : [...prev.prompts.openTo, option]
      }
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData(prev => ({
          ...prev,
          photos: [...prev.photos, reader.result as string]
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotoDelete = (indexToDelete: number) => {
    setTempData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, index) => index !== indexToDelete)
    }));
  };

  const currentData = isEditing ? tempData : profileData;

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
          My Profile
        </h1>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-black text-white hover:bg-neutral-800 transition-colors flex-shrink-0"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500 }}
          >
            <Pencil className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="hidden md:inline">Edit</span>
          </button>
        ) : (
          <div className="flex gap-2 md:gap-3 flex-shrink-0">
            <button
              onClick={handleCancel}
              className="px-3 md:px-4 py-2 bg-neutral-100 hover:bg-neutral-200 transition-colors"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 500 }}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="flex items-center gap-1.5 px-3 md:px-4 py-2 bg-black text-white hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', fontWeight: 500 }}
            >
              <Check className="w-3.5 h-3.5 md:w-4 md:h-4" />
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Photos */}
        <section className="space-y-6">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              fontWeight: 400
            }}
          >
            Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {currentData.photos.map((photo, index) => (
              <div key={index} className="relative aspect-[3/4] bg-neutral-100 overflow-hidden group">
                <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-full object-cover" />
                {isEditing && (
                  <button
                    className="absolute top-2 right-2 bg-black text-white p-1.5 rounded-full hover:bg-neutral-800 transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    onClick={() => handlePhotoDelete(index)}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
            {isEditing && (
              <button
                className="aspect-[3/4] border-2 border-dashed border-neutral-300 flex items-center justify-center hover:border-neutral-400 transition-colors"
                onClick={() => document.getElementById('photoUpload')?.click()}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem' }} className="text-neutral-500">
                  + Add Photo
                </span>
                <input
                  type="file"
                  id="photoUpload"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </button>
            )}
          </div>
        </section>

        {/* Basic Info */}
        <section className="space-y-6">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              fontWeight: 400
            }}
          >
            About
          </h2>
          <div className="space-y-6">
            {/* Name & Age */}
            <div>
              <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                Name & Age
              </label>
              {isEditing ? (
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={tempData.name}
                    onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                    className="flex-1 px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  />
                  <input
                    type="number"
                    value={tempData.age}
                    onChange={(e) => setTempData({ ...tempData, age: parseInt(e.target.value) })}
                    className="w-24 px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  />
                </div>
              ) : (
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem' }}>
                  {currentData.name}, {currentData.age}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={tempData.location}
                  onChange={(e) => setTempData({ ...tempData, location: e.target.value })}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                />
              ) : (
                <div className="flex items-center gap-2 text-neutral-700">
                  <MapPin className="w-4 h-4" />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>
                    {currentData.location}
                  </span>
                </div>
              )}
            </div>

            {/* Height & Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                  Height
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.height}
                    onChange={(e) => setTempData({ ...tempData, height: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                    placeholder="e.g., 5'10&quot;"
                  />
                ) : (
                  <p className="text-neutral-700" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>
                    {currentData.height}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                  Weight
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempData.weight}
                    onChange={(e) => setTempData({ ...tempData, weight: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                    placeholder="e.g., 160 lbs"
                  />
                ) : (
                  <p className="text-neutral-700" style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}>
                    {currentData.weight}
                  </p>
                )}
              </div>
            </div>

            {/* Current Vibe */}
            <div>
              <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                Current Vibe
              </label>
              {isEditing && editingVibe ? (
                <div className="grid grid-cols-2 gap-3">
                  {AVAILABLE_VIBES.map((vibe) => (
                    <button
                      key={vibe}
                      onClick={() => {
                        setTempData({ ...tempData, currentVibe: vibe });
                        setEditingVibe(false);
                      }}
                      className={`p-4 transition-all ${
                        tempData.currentVibe === vibe
                          ? 'bg-black text-white'
                          : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500 }}
                    >
                      {vibe}
                    </button>
                  ))}
                </div>
              ) : (
                <div
                  onClick={() => isEditing && setEditingVibe(true)}
                  className={`inline-flex items-center gap-0.5 bg-black text-white px-2 py-0.5 ${
                    isEditing ? 'cursor-pointer hover:bg-neutral-800' : ''
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.625rem', fontWeight: 500 }}>
                    {currentData.currentVibe}
                  </span>
                  {isEditing && <Pencil className="w-2 h-2 ml-0.5" />}
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={tempData.bio}
                  onChange={(e) => setTempData({ ...tempData, bio: e.target.value })}
                  className="w-full min-h-[120px] px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                  placeholder="Tell people about yourself..."
                />
              ) : (
                <p
                  className="text-neutral-700"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                >
                  {currentData.bio || 'Add a bio to tell people about yourself...'}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Profile Prompts */}
        <section className="space-y-8">
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              fontWeight: 400
            }}
          >
            More About Me
          </h2>

          {/* What brings you here tonight? */}
          <div className="space-y-3">
            <h3
              className="text-neutral-900"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400 }}
            >
              What brings you here tonight?
            </h3>
            {isEditing ? (
              <textarea
                value={tempData.prompts.whyHere}
                onChange={(e) => setTempData({
                  ...tempData,
                  prompts: { ...tempData.prompts, whyHere: e.target.value }
                })}
                className="w-full min-h-[120px] px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                placeholder="I'm here because..."
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.prompts.whyHere || 'Not answered yet...'}
              </p>
            )}
          </div>

          {/* Tell us how you see yourself */}
          <div className="space-y-3">
            <h3
              className="text-neutral-900"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400 }}
            >
              Tell us how you see yourself
            </h3>
            {isEditing ? (
              <textarea
                value={tempData.prompts.aboutMe}
                onChange={(e) => setTempData({
                  ...tempData,
                  prompts: { ...tempData.prompts, aboutMe: e.target.value }
                })}
                className="w-full min-h-[120px] px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                placeholder="I'm the kind of person who..."
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.prompts.aboutMe || 'Not answered yet...'}
              </p>
            )}
          </div>

          {/* What gets you excited? */}
          <div className="space-y-3">
            <h3
              className="text-neutral-900"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400 }}
            >
              What gets you excited?
            </h3>
            {isEditing ? (
              <textarea
                value={tempData.prompts.excitedBy}
                onChange={(e) => setTempData({
                  ...tempData,
                  prompts: { ...tempData.prompts, excitedBy: e.target.value }
                })}
                className="w-full min-h-[120px] px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                placeholder="I love when..."
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.prompts.excitedBy || 'Not answered yet...'}
              </p>
            )}
          </div>

          {/* What are you open to exploring? */}
          <div className="space-y-3">
            <h3
              className="text-neutral-900"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400 }}
            >
              What are you open to exploring?
            </h3>
            {isEditing ? (
              <div className="space-y-2">
                {OPEN_TO_OPTIONS.map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleOpenToOption(option)}
                    className={`w-full p-4 text-left transition-all ${
                      tempData.prompts.openTo.includes(option)
                        ? 'bg-black text-white'
                        : 'bg-neutral-50 hover:bg-neutral-100 border border-neutral-200'
                    }`}
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', fontWeight: 500 }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <div>
                {currentData.prompts.openTo.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {currentData.prompts.openTo.map((option) => (
                      <span
                        key={option}
                        className="px-4 py-2 bg-neutral-100 border border-neutral-200"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p
                    className="text-neutral-700"
                    style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                  >
                    Not answered yet...
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Private Information (Request Access) */}
        <section className="space-y-6">
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 400
              }}
            >
              Private Information
            </h2>
            <p
              className="text-neutral-500 mt-2"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', lineHeight: 1.6 }}
            >
              This information is only shared when you approve access requests from other users.
            </p>
          </div>

          {/* Instagram */}
          <div>
            <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
              Instagram Handle
            </label>
            {isEditing ? (
              <input
                type="text"
                value={tempData.privateInfo.instagram}
                onChange={(e) => setTempData({
                  ...tempData,
                  privateInfo: { ...tempData.privateInfo, instagram: e.target.value }
                })}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                placeholder="@yourusername"
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.privateInfo.instagram || 'Not added yet...'}
              </p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
              Job Title
            </label>
            {isEditing ? (
              <input
                type="text"
                value={tempData.privateInfo.jobTitle}
                onChange={(e) => setTempData({
                  ...tempData,
                  privateInfo: { ...tempData.privateInfo, jobTitle: e.target.value }
                })}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                placeholder="e.g., Creative Director"
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.privateInfo.jobTitle || 'Not added yet...'}
              </p>
            )}
          </div>

          {/* Interesting Fact */}
          <div>
            <label className="block text-neutral-500 mb-2" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}>
              An Interesting Fact About You
            </label>
            {isEditing ? (
              <textarea
                value={tempData.privateInfo.interestingFact}
                onChange={(e) => setTempData({
                  ...tempData,
                  privateInfo: { ...tempData.privateInfo, interestingFact: e.target.value }
                })}
                className="w-full min-h-[120px] px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none resize-none"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
                placeholder="Share something unique about yourself..."
              />
            ) : (
              <p
                className="text-neutral-700"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.6 }}
              >
                {currentData.privateInfo.interestingFact || 'Not added yet...'}
              </p>
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
}