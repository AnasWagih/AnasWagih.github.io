import { ReactNode } from "react";
import { Minus, Square, X } from "lucide-react";

interface PixelWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  titleBarExtra?: ReactNode;
}

const PixelWindow = ({ title, children, className = "", onClick, titleBarExtra }: PixelWindowProps) => {
  return (
    <div
      onClick={onClick}
      className={`border-2 border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.1),var(--pixel-shadow)] shadow-[var(--pixel-shadow)] ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Pixel Window Title Bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-muted/60 border-b-2 border-border">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 border-2 border-destructive bg-destructive/60" />
          <div className="w-2.5 h-2.5 border-2 border-accent bg-accent/60" />
          <div className="w-2.5 h-2.5 border-2 border-secondary bg-secondary/60" />
        </div>
        <span className="text-[10px] sm:text-xs text-muted-foreground font-pixel truncate ml-1 flex-1 uppercase">
          {title}
        </span>
        {titleBarExtra}
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Minus className="w-3 h-3" />
          <Square className="w-2.5 h-2.5" />
          <X className="w-3 h-3" />
        </div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
};

export default PixelWindow;
