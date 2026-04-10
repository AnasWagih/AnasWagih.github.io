import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);
  const [glitchFrame, setGlitchFrame] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const steps = 100;
    const stepDuration = duration / steps;
    let currentStep = 0;

    // Show text after a brief delay
    setTimeout(() => setShowText(true), 300);

    const interval = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      
      // Sync glitch effect with progress
      if (currentStep % 8 === 0) {
        setGlitchFrame(prev => (prev + 1) % 3);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onLoadComplete, 300);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  // Simple pixel blocks that fill as loading progresses
  const totalBlocks = 20;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden select-none flex items-center justify-center">
      {/* Subtle scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)'
        }}
      />

      {/* Floating pixel particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary opacity-40"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i % 4) * 20}%`,
              animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        
        {/* Logo / Title with glitch effect */}
        <div className="relative">
          <h1 
            className={`text-4xl md:text-6xl font-pixel text-primary tracking-wider transition-all duration-100 ${
              showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              textShadow: glitchFrame === 1 
                ? '2px 0 hsl(var(--accent)), -2px 0 hsl(var(--secondary))'
                : glitchFrame === 2
                ? '-1px 0 hsl(var(--secondary)), 1px 0 hsl(var(--accent))'
                : '0 0 20px hsl(var(--primary) / 0.5)'
            }}
          >
            ANAS WAGIH
          </h1>
          
          {/* Subtitle */}
          <p 
            className={`text-center text-xs md:text-sm font-pixel text-muted-foreground mt-3 tracking-[0.3em] transition-all duration-300 delay-200 ${
              showText ? 'opacity-100' : 'opacity-0'
            }`}
          >
            ELECTRONICS & COMMUNICATIONS ENGINEERING STUDENT
          </p>
        </div>

        {/* Pixel art loading bar container */}
        <div 
          className={`w-full max-w-md transition-all duration-500 delay-300 ${
            showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Block-based progress bar */}
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(totalBlocks)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-6 md:w-4 md:h-8 border-2 transition-all duration-150"
                style={{
                  borderColor: i < filledBlocks 
                    ? 'hsl(var(--primary))' 
                    : 'hsl(var(--muted-foreground) / 0.3)',
                  backgroundColor: i < filledBlocks 
                    ? 'hsl(var(--primary))' 
                    : 'transparent',
                  boxShadow: i < filledBlocks 
                    ? '0 0 8px hsl(var(--primary) / 0.6)' 
                    : 'none',
                  transform: i < filledBlocks ? 'scaleY(1.1)' : 'scaleY(1)',
                  transitionDelay: `${i * 10}ms`
                }}
              />
            ))}
          </div>

          {/* Percentage */}
          <div className="text-center">
            <span 
              className="font-pixel text-2xl md:text-3xl text-primary tabular-nums"
              style={{
                textShadow: '0 0 10px hsl(var(--primary) / 0.4)'
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        {/* Loading message */}
        <div 
          className={`transition-all duration-500 delay-500 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-pixel text-xs text-muted-foreground animate-pulse tracking-widest">
            {progress < 30 && "INITIALIZING..."}
            {progress >= 30 && progress < 60 && "LOADING ASSETS..."}
            {progress >= 60 && progress < 90 && "ALMOST READY..."}
            {progress >= 90 && "LAUNCHING..."}
          </p>
        </div>

        {/* Simple pixel decoration */}
        <div 
          className={`flex items-center gap-2 transition-all duration-500 delay-700 ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-2 bg-secondary animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-accent animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>

      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 flex gap-1">
        <div className="w-3 h-3 bg-primary" />
        <div className="w-3 h-3 bg-primary/50" />
      </div>
      <div className="absolute top-4 right-4 flex gap-1">
        <div className="w-3 h-3 bg-secondary/50" />
        <div className="w-3 h-3 bg-secondary" />
      </div>
      <div className="absolute bottom-4 left-4 flex gap-1">
        <div className="w-3 h-3 bg-accent" />
        <div className="w-3 h-3 bg-accent/50" />
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="w-3 h-3 bg-primary/50" />
        <div className="w-3 h-3 bg-primary" />
      </div>
    </div>
  );
};

export default LoadingScreen;
