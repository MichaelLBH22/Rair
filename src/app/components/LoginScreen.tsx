import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onBack: () => void;
  onLoginSuccess: (email: string, password: string) => void;
}

export function LoginScreen({ onBack, onLoginSuccess }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simple mock login - just validate that fields are filled
      if (!email || !password) {
        throw new Error('Please enter both email and password');
      }

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      console.log('Mock login successful');
      
      // Pass the email and password back to parent
      onLoginSuccess(email, password);

    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to log in. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-neutral-200 px-6 py-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 hover:bg-neutral-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3rem',
            fontWeight: 400,
            letterSpacing: '0.25em',
            display: 'inline-block'
          }}
        >
          RAIR
        </h1>
        
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-12">
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Welcome Back
            </h2>
            <p
              className="text-neutral-600"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: 300,
              }}
            >
              Log in to continue your journey
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-neutral-700 mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                placeholder="your@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-neutral-700 mb-2"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 500 }}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:outline-none transition-colors pr-12"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem' }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-50 border border-red-200 px-4 py-3">
                <p
                  className="text-red-600"
                  style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
                >
                  {error}
                </p>
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white px-6 py-4 hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.125rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
              }}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          {/* Footer text */}
          <p
            className="text-center text-neutral-500 mt-8"
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem' }}
          >
            Don't have an account?{' '}
            <button
              onClick={onBack}
              className="text-black underline hover:text-neutral-600 transition-colors font-semibold"
            >
              Sign Up
            </button>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}