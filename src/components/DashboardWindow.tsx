import { motion } from "framer-motion";
import { LucideIcon, MapPin, GraduationCap, Code2, Cpu, Award, Send } from "lucide-react";
import { useRipple } from "@/hooks/useRipple";
import pixelAvatar from "@/assets/pixel-avatar.png";

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

const PreviewContent = ({ id }: { id: string }) => {
  switch (id) {
    case "hero":
      return (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={pixelAvatar} alt="Avatar" className="w-8 h-8 pixelated border-2 border-primary" />
            <div className="flex-1">
              <div className="h-2 bg-primary/30 rounded mb-1" style={{ width: "80%" }} />
              <div className="h-1.5 bg-secondary/30 rounded" style={{ width: "60%" }} />
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="flex-1 h-6 glass border border-primary/30 rounded"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ delay: i * 0.2, duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      );
    
    case "about":
      return (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <GraduationCap className="w-4 h-4 text-secondary mt-0.5" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-secondary/40 rounded" style={{ width: "90%" }} />
              <div className="h-1.5 bg-secondary/30 rounded" style={{ width: "70%" }} />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-accent mt-0.5" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-accent/40 rounded" style={{ width: "60%" }} />
              <div className="h-1.5 bg-accent/30 rounded" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="flex gap-1 flex-wrap mt-2">
            {["IOT", "AI", "EMBEDDED"].map((tag, i) => (
              <motion.span
                key={tag}
                className="text-[8px] px-2 py-0.5 glass border border-primary/30 font-pixel"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      );
    
    case "experience":
      return (
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="border-l-2 border-accent/50 pl-2 space-y-1">
              <div className="h-1.5 bg-accent/40 rounded" style={{ width: "85%" }} />
              <div className="h-1 bg-muted-foreground/20 rounded" style={{ width: "60%" }} />
              <div className="flex gap-1">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-1 w-1 bg-primary/30 rounded-full" />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    
    case "projects":
      return (
        <div className="grid grid-cols-2 gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="glass border border-primary/30 p-2 space-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <Code2 className="w-3 h-3 text-primary" />
              <div className="h-1 bg-primary/30 rounded" />
              <div className="h-1 bg-secondary/30 rounded" style={{ width: "70%" }} />
            </motion.div>
          ))}
        </div>
      );
    
    case "skills":
      return (
        <div className="space-y-2">
          {[
            { icon: Code2, color: "primary", count: 4 },
            { icon: Cpu, color: "secondary", count: 5 }
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-1">
              <row.icon className={`w-3 h-3 text-${row.color}`} />
              <div className="flex gap-1 flex-wrap flex-1">
                {Array.from({ length: row.count }).map((_, j) => (
                  <motion.div
                    key={j}
                    className={`h-1.5 bg-${row.color}/30 rounded`}
                    style={{ width: `${15 + j * 5}%` }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ delay: j * 0.2, duration: 2, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    
    case "certifications":
      return (
        <div className="space-y-1.5">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 glass border border-accent/30 p-1.5"
              animate={{ x: [0, 2, 0] }}
              transition={{ delay: i * 0.3, duration: 2, repeat: Infinity }}
            >
              <Award className="w-3 h-3 text-accent" />
              <div className="flex-1 space-y-0.5">
                <div className="h-1 bg-accent/40 rounded" style={{ width: "80%" }} />
                <div className="h-1 bg-accent/20 rounded" style={{ width: "50%" }} />
              </div>
            </motion.div>
          ))}
        </div>
      );
    
    case "contact":
      return (
        <div className="space-y-2">
          <motion.div
            className="glass border-2 border-primary/50 p-2 text-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Send className="w-4 h-4 text-primary mx-auto mb-1" />
            <div className="h-1 bg-primary/40 rounded mx-auto" style={{ width: "80%" }} />
          </motion.div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="flex-1 h-4 glass border border-secondary/30 rounded"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ delay: i * 0.2, duration: 1.5, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
      );
    
    default:
      return null;
  }
};

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
        <div className="space-y-3">
          <p className="text-[10px] font-pixel text-muted-foreground leading-relaxed uppercase">
            {window.preview}
          </p>
          <div className="mt-3">
            <PreviewContent id={window.id} />
          </div>
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
