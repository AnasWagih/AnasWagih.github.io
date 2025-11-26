import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Contact from "./Contact";

interface FullPageViewProps {
  sectionId: string;
  onClose: () => void;
}

const FullPageView = ({ sectionId, onClose }: FullPageViewProps) => {
  const renderSection = () => {
    switch (sectionId) {
      case "hero":
        return <Hero />;
      case "about":
        return <About />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "skills":
        return <Skills />;
      case "certifications":
        return <Certifications />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Close button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed top-4 right-4 z-50"
      >
        <Button
          onClick={onClose}
          className="glass-strong border-4 border-primary hover:scale-110 transition-all group font-pixel"
          size="lg"
        >
          <X className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
          &gt; BACK TO DASHBOARD
        </Button>
      </motion.div>

      {/* Section content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="min-h-screen"
      >
        {renderSection()}
      </motion.div>
    </motion.div>
  );
};

export default FullPageView;
