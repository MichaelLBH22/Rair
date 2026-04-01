interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full text-center">
        {/* Eyebrow text */}
        <p 
          className="text-neutral-400 mb-12"
          style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '0.875rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          A new way to connect
        </p>

        {/* Main headline */}
        <h1
          className="mb-16"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '3.375rem',
            fontWeight: 400,
            letterSpacing: '0.75em',
            textAlign: 'center',
            paddingLeft: '0.75em'
          }}
        >
          RAIR
        </h1>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto space-y-8 mb-12">
          <p 
            className="text-neutral-900 leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.4,
              letterSpacing: '-0.01em'
            }}
          >
            We're not a dating app. We have Standards.
          </p>
          <p 
            className="text-neutral-600 leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 300,
              lineHeight: 1.6
            }}
          >
            The World's 1st Exclusive Social Platform.
          </p>
          <p 
            className="text-neutral-900 leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 600,
              lineHeight: 1.6
            }}
          >
            Zero Swiping. Quality Connections.
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={onGetStarted}
          className="bg-black text-white px-16 py-6 hover:bg-neutral-800 transition-colors mx-auto block"
          style={{ 
            fontFamily: 'var(--font-sans)',
            fontSize: '1.125rem',
            letterSpacing: '0.05em',
            fontWeight: 600
          }}
        >
          Enter
        </button>

        {/* Login link */}
        <div className="mt-6">
          <p 
            className="text-neutral-500"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem'
            }}
          >
            Already have an account?{' '}
            <button
              onClick={onLogin}
              className="text-black underline hover:text-neutral-600 transition-colors font-semibold"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}