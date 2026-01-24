import { useEffect, useState, useCallback } from "react";

const BackgroundOrbs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Check if hovering over interactive elements
    const target = e.target as HTMLElement;
    const isInteractive = target.closest('button, a, [role="button"]');
    setIsHovering(!!isInteractive);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Subtle background layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Floating pixel particles - like loading screen */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary"
            style={{
              left: `${8 + (i * 6)}%`,
              top: `${15 + (i % 5) * 18}%`,
              opacity: 0.2 + (i % 3) * 0.1,
              animation: `float ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}

        {/* Subtle gradient orbs - much softer */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(330, 100%, 65%) 0%, transparent 70%)",
            top: "5%",
            left: "5%",
            opacity: 0.08,
            filter: "blur(80px)",
            animation: "glow-pulse 8s ease-in-out infinite",
          }}
        />
        
        <div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(190, 100%, 50%) 0%, transparent 70%)",
            top: "40%",
            right: "10%",
            opacity: 0.06,
            filter: "blur(80px)",
            animation: "glow-pulse 10s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        
        <div
          className="absolute w-[350px] h-[350px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(50, 100%, 60%) 0%, transparent 70%)",
            bottom: "10%",
            left: "30%",
            opacity: 0.05,
            filter: "blur(80px)",
            animation: "glow-pulse 12s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Custom Pixel Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'custom-cursor-hover' : ''}`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Corner decorations - matching loading screen */}
      <div className="fixed top-4 left-4 flex gap-1 z-10 pointer-events-none">
        <div className="w-2 h-2 bg-primary opacity-60" />
        <div className="w-2 h-2 bg-primary opacity-30" />
      </div>
      <div className="fixed top-4 right-4 flex gap-1 z-10 pointer-events-none">
        <div className="w-2 h-2 bg-secondary opacity-30" />
        <div className="w-2 h-2 bg-secondary opacity-60" />
      </div>
      <div className="fixed bottom-4 left-4 flex gap-1 z-10 pointer-events-none">
        <div className="w-2 h-2 bg-accent opacity-60" />
        <div className="w-2 h-2 bg-accent opacity-30" />
      </div>
      <div className="fixed bottom-4 right-4 flex gap-1 z-10 pointer-events-none">
        <div className="w-2 h-2 bg-primary opacity-30" />
        <div className="w-2 h-2 bg-primary opacity-60" />
      </div>
    </>
  );
};

export default BackgroundOrbs;
