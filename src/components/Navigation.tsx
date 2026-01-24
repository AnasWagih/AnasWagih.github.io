import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRipple } from "@/hooks/useRipple";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const createRipple = useRipple();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certs", id: "certifications" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div
        className={`max-w-5xl mx-auto transition-all duration-300 ${
          isScrolled ? "glass-strong" : "glass"
        }`}
      >
        <div className="flex items-center justify-between h-14 px-4 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-pixel gradient-text hover:scale-105 transition-all"
          >
            &lt;AMW/&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection(item.id);
                }}
                className="px-3 py-2 font-sans text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all relative overflow-hidden"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto glass-strong">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={(e) => {
                  createRipple(e);
                  scrollToSection(item.id);
                }}
                className="block w-full text-left px-4 py-3 font-sans text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
