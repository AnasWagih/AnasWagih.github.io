import { useState, useEffect } from "react";
import { Code, Zap, Star, Heart, Trophy, Sparkles } from "lucide-react";

const LoadingScreen = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [characterPos, setCharacterPos] = useState(0);
  const [coins, setCoins] = useState(0);
  const [characterFrame, setCharacterFrame] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedItems, setCollectedItems] = useState<number[]>([]);

  const stages = [
    { name: "SYSTEM INIT", icon: "⚙️", color: "hsl(190, 100%, 50%)" },
    { name: "LOADING WORLD", icon: "🌍", color: "hsl(120, 100%, 50%)" },
    { name: "SPAWNING ASSETS", icon: "📦", color: "hsl(50, 100%, 60%)" },
    { name: "BUILDING QUEST", icon: "⚔️", color: "hsl(0, 100%, 60%)" },
    { name: "READY!", icon: "✨", color: "hsl(330, 100%, 65%)" }
  ];

  const items = [
    { icon: "⭐", color: "hsl(50, 100%, 60%)" },
    { icon: "💎", color: "hsl(190, 100%, 50%)" },
    { icon: "🔥", color: "hsl(15, 100%, 55%)" },
    { icon: "⚡", color: "hsl(50, 100%, 60%)" },
    { icon: "💜", color: "hsl(280, 100%, 60%)" },
    { icon: "🏆", color: "hsl(50, 100%, 60%)" }
  ];

  useEffect(() => {
    const duration = 3000;
    const steps = 100;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = (currentStep / steps) * 100;
      setProgress(newProgress);
      setCharacterPos(newProgress);
      
      // Animate character walking
      if (currentStep % 8 === 0) {
        setCharacterFrame(prev => (prev + 1) % 4);
      }

      // Stage progression
      const stageIndex = Math.floor((newProgress / 100) * stages.length);
      setCurrentStage(Math.min(stageIndex, stages.length - 1));

      // Collect items along the way
      const itemThreshold = 100 / items.length;
      const currentItemIndex = Math.floor(newProgress / itemThreshold);
      if (currentItemIndex < items.length && !collectedItems.includes(currentItemIndex)) {
        setCollectedItems(prev => [...prev, currentItemIndex]);
        setCoins(prev => prev + 100);
      }

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(onLoadComplete, 500);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [onLoadComplete, collectedItems, items.length, stages.length]);

  // Character walking animation frames
  const characterFrames = ["🚶", "🚶‍♂️", "🚶", "🚶‍♂️"];
  const currentStageData = stages[currentStage];

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-hidden select-none">
      {/* Pixel grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }} />

      {/* Floating clouds */}
      <div className="absolute top-20 left-[10%] text-6xl opacity-30 animate-float">☁️</div>
      <div className="absolute top-40 right-[15%] text-5xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>☁️</div>

      <div className="relative h-full w-full flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full space-y-8">
          
          {/* Game Title Card */}
          <div className="glass-strong p-6 border-4 border-primary relative">
            <div className="pixel-corners" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-pixel gradient-text mb-2 animate-pixel-bounce">
                ANAS.DEV
              </div>
              <div className="text-xs md:text-sm font-pixel text-secondary">
                &gt;&gt; ADVENTURE LOADING...
              </div>
            </div>
          </div>

          {/* HUD Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <div className="glass-strong p-3 md:p-4 border-4 border-accent relative">
              <div className="pixel-corners" />
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl">💰</div>
                <div>
                  <div className="text-xs font-pixel text-muted-foreground">COINS</div>
                  <div className="text-lg md:text-xl font-pixel text-accent">{coins}</div>
                </div>
              </div>
            </div>

            <div className="glass-strong p-3 md:p-4 border-4 border-primary relative">
              <div className="pixel-corners" />
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl">📦</div>
                <div>
                  <div className="text-xs font-pixel text-muted-foreground">ITEMS</div>
                  <div className="text-lg md:text-xl font-pixel text-primary">{collectedItems.length}/{items.length}</div>
                </div>
              </div>
            </div>

            <div className="glass-strong p-3 md:p-4 border-4 border-secondary relative col-span-2 md:col-span-1">
              <div className="pixel-corners" />
              <div className="flex items-center gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl">{currentStageData.icon}</div>
                <div className="flex-1">
                  <div className="text-xs font-pixel text-muted-foreground">STAGE</div>
                  <div className="text-sm md:text-base font-pixel text-secondary truncate">{currentStageData.name}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Game World */}
          <div className="glass-strong p-4 md:p-8 border-4 border-primary relative min-h-[300px] md:min-h-[400px]">
            <div className="pixel-corners" />
            
            {/* Ground */}
            <div className="absolute bottom-16 md:bottom-24 left-0 right-0 h-12 md:h-16 border-t-4 border-primary" style={{
              background: 'repeating-linear-gradient(90deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 16px, hsl(var(--secondary)) 16px, hsl(var(--secondary)) 32px)'
            }} />

            {/* Items to collect along the path */}
            <div className="absolute bottom-28 md:bottom-40 left-0 right-0 flex justify-between px-4 md:px-8">
              {items.map((item, i) => {
                const itemPosition = ((i + 1) / items.length) * 100;
                const isCollected = collectedItems.includes(i);
                return (
                  <div 
                    key={i}
                    className={`text-3xl md:text-4xl transition-all duration-300 ${
                      isCollected ? 'opacity-20 scale-50' : 'animate-pixel-bounce'
                    }`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    {item.icon}
                  </div>
                );
              })}
            </div>

            {/* Walking Character */}
            <div 
              className="absolute bottom-24 md:bottom-32 text-5xl md:text-6xl transition-all duration-100"
              style={{ 
                left: `${Math.min(characterPos, 85)}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {characterFrames[characterFrame]}
            </div>

            {/* Speech Bubble */}
            <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
              <div className="glass-strong p-4 md:p-6 border-4 border-accent relative">
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-accent" />
                <div className="text-center">
                  <div className="text-xs font-pixel text-muted-foreground mb-2">&gt;&gt; QUEST LOG</div>
                  <div 
                    className="text-sm md:text-base font-pixel"
                    style={{ color: currentStageData.color }}
                  >
                    {currentStageData.name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs md:text-sm font-pixel text-secondary">LOADING PROGRESS</span>
              <span className="text-xs md:text-sm font-pixel text-accent">{Math.round(progress)}%</span>
            </div>
            <div className="relative h-8 md:h-10 border-4 border-border glass-strong overflow-hidden">
              <div 
                className="absolute inset-0 transition-all duration-100"
                style={{ 
                  width: `${progress}%`,
                  background: `repeating-linear-gradient(
                    45deg,
                    hsl(var(--primary)),
                    hsl(var(--primary)) 10px,
                    hsl(var(--secondary)) 10px,
                    hsl(var(--secondary)) 20px
                  )`,
                  boxShadow: `inset 0 0 20px ${currentStageData.color}`
                }}
              >
                <div className="absolute inset-0 scanline-effect opacity-30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-pixel text-xs md:text-sm text-foreground drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {Math.round(progress)}% COMPLETE
                </span>
              </div>
            </div>
          </div>

          {/* Collected Items Display */}
          <div className="flex justify-center gap-2 flex-wrap">
            {items.map((item, i) => (
              <div 
                key={i}
                className={`glass-strong p-2 md:p-3 border-2 transition-all ${
                  collectedItems.includes(i) 
                    ? 'border-accent scale-110' 
                    : 'border-border opacity-30'
                }`}
              >
                <div className="text-xl md:text-2xl">{item.icon}</div>
              </div>
            ))}
          </div>

          {/* Footer Message */}
          <div className="text-center">
            <p className="text-xs font-pixel text-muted-foreground tracking-widest animate-pulse">
              ▶ PREPARING YOUR ADVENTURE ◀
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
