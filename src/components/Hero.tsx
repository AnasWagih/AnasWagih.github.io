import { ArrowDown, Github, Linkedin, Mail, Phone, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { useRipple } from "@/hooks/useRipple";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import pixelAvatar from "@/assets/pixel-avatar.png";

const Hero = () => {
  const createRipple = useRipple();
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollReveal();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8">
          <img 
            src={pixelAvatar} 
            alt="Pixel avatar" 
            className="w-24 h-24 md:w-28 md:h-28 mx-auto pixelated border-3 border-primary animate-float"
            style={{
              boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
            }}
          />
        </div>
        
        {/* Name */}
        <h1 
          ref={titleRef}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-pixel mb-6 leading-tight transition-all duration-700 ${
            titleVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">Anas M. Wagih</span>
        </h1>
        
        {/* Title */}
        <h2 
          ref={subtitleRef}
          className={`text-sm sm:text-base md:text-xl font-sans mb-10 text-secondary transition-all duration-700 delay-100 ${
            subtitleVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          Electronics & Communications Engineer
        </h2>
        
        {/* CTA Buttons */}
        <div 
          ref={buttonRef}
          className={`flex flex-wrap gap-3 sm:gap-4 justify-center mb-10 transition-all duration-700 delay-200 ${
            buttonVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <Button
            size="lg"
            className="glass-strong font-pixel text-xs sm:text-sm hover:scale-105 transition-all"
            onClick={(e) => {
              createRipple(e);
              scrollToSection("projects");
            }}
          >
            VIEW WORK
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass font-pixel text-xs sm:text-sm hover:scale-105 transition-all"
            onClick={(e) => {
              createRipple(e);
              scrollToSection("contact");
            }}
          >
            CONTACT
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          {[
            { href: "https://github.com/AnasWagih25", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/anas-wagih-9423a7232/", icon: Linkedin, label: "LinkedIn" },
            { href: "/CV.pdf", icon: FileDown, label: "CV", download: true },
            { href: "mailto:anaswagih35@gmail.com", icon: Mail, label: "Email" },
            { href: "tel:+201020065576", icon: Phone, label: "Call" },
          ].map((link: any, i) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download ? "Anas_Wagih_CV.pdf" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass px-3 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 hover:scale-105 transition-all group min-w-[80px] sm:min-w-[100px] justify-center"
              onClick={(e) => createRipple(e)}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <link.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors flex-shrink-0" />
              <span className="font-sans text-xs sm:text-sm whitespace-nowrap">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
