import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Code, Wrench, Award, Mail, Home } from "lucide-react";
import DashboardWindow from "./DashboardWindow";
import pixelAvatar from "@/assets/pixel-avatar.png";

interface DashboardProps {
  onSelectSection: (section: string) => void;
  selectedSection: string | null;
}

type WindowSize = "small" | "medium" | "large";

interface WindowItem {
  id: string;
  title: string;
  icon: typeof Home;
  preview: string;
  color: string;
  size: WindowSize;
}

const Dashboard = ({ onSelectSection, selectedSection }: DashboardProps) => {
  const windows: WindowItem[] = [
    {
      id: "hero",
      title: "HOME",
      icon: Home,
      preview: "Anas M. Wagih • Electronics & Embedded Systems Engineer",
      color: "primary",
      size: "large"
    },
    {
      id: "about",
      title: "ABOUT",
      icon: User,
      preview: "Education • Location: Cairo • Focus: IoT, Embedded, AI",
      color: "secondary",
      size: "medium"
    },
    {
      id: "contact",
      title: "CONTACT",
      icon: Mail,
      preview: "Get in touch • Let's build something amazing",
      color: "primary",
      size: "medium"
    },
    {
      id: "experience",
      title: "EXPERIENCE",
      icon: Briefcase,
      preview: "R&D Engineer • Embedded Systems • PCB Design",
      color: "accent",
      size: "large"
    },
    {
      id: "projects",
      title: "PROJECTS",
      icon: Code,
      preview: "IoT • GPS Tracker • Sign Language • Object Detection",
      color: "primary",
      size: "large"
    },
    {
      id: "skills",
      title: "SKILLS",
      icon: Wrench,
      preview: "Python • C++ • ESP32 • KiCAD • TensorFlow",
      color: "secondary",
      size: "medium"
    },
    {
      id: "certifications",
      title: "CERTIFICATIONS",
      icon: Award,
      preview: "Deep Learning • AWS • PCB Design",
      color: "accent",
      size: "medium"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-12 text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.img
            src={pixelAvatar}
            alt="Pixel avatar"
            className="w-16 h-16 md:w-20 md:h-20 pixelated border-4 border-primary rounded-lg glow-on-hover"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-pixel gradient-text mb-2">
          &gt;&gt; ANAS M. WAGIH
        </h1>
        <p className="text-sm md:text-base font-pixel text-muted-foreground">
          &gt; PORTFOLIO DASHBOARD
        </p>
      </motion.div>

      {/* Windows Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {windows.map((window, index) => (
            <DashboardWindow
              key={window.id}
              window={window}
              index={index}
              onClick={() => onSelectSection(window.id)}
              isSelected={selectedSection === window.id}
            />
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-12 text-xs font-pixel text-muted-foreground"
      >
        &gt; CLICK ANY WINDOW TO EXPAND
      </motion.div>
    </div>
  );
};

export default Dashboard;
