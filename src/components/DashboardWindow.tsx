import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRipple } from "@/hooks/useRipple";

interface WindowProps {
  window: {
    id: string;
    title: string;
    icon: LucideIcon;
    preview: string;
    color: string;
    size: "small" | "medium" | "large";
  };
  index: number;
  onClick: () => void;
  isSelected: boolean;
}

const DashboardWindow = ({ window, index, onClick, isSelected }: WindowProps) => {
  const createRipple = useRipple();
  const Icon = window.icon;

  const sizeClasses = {
    small: "md:col-span-1",
    medium: "md:col-span-1",
    large: "md:col-span-2 lg:col-span-1"
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    createRipple(e);
    onClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`${sizeClasses[window.size]} cursor-pointer relative overflow-hidden`}
      onClick={handleClick}
    >
      <div className="glass-strong p-6 h-full border-4 border-border hover:border-primary transition-all duration-300 relative group">
        {/* Pixel corners */}
        <div className={`absolute -top-2 -left-2 w-4 h-4 bg-${window.color}`} />
        <div className={`absolute -top-2 -right-2 w-4 h-4 bg-${window.color}`} />
        <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-${window.color}`} />
        <div className={`absolute -bottom-2 -right-2 w-4 h-4 bg-${window.color}`} />

        {/* Window title bar */}
        <div className={`flex items-center gap-2 mb-4 pb-3 border-b-2 border-${window.color}/30`}>
          <div className={`p-2 bg-${window.color}/20 border-2 border-${window.color}`}>
            <Icon className={`w-4 h-4 text-${window.color}`} />
          </div>
          <span className="font-pixel text-sm">{window.title}</span>
          <div className="ml-auto flex gap-1">
            <div className="w-2 h-2 bg-accent border border-foreground/20" />
            <div className="w-2 h-2 bg-secondary border border-foreground/20" />
            <div className="w-2 h-2 bg-primary border border-foreground/20" />
          </div>
        </div>

        {/* Preview content */}
        <div className="space-y-2">
          <p className="text-xs font-sans text-muted-foreground leading-relaxed line-clamp-2">
            {window.preview}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${window.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
        
        {/* Scanline effect */}
        <div className="absolute inset-0 scanline-effect opacity-30 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default DashboardWindow;
