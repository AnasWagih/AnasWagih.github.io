import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";
import { useMagnetic } from "@/hooks/useMagnetic";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const createRipple = useRipple();
  const magnetic1 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic2 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic3 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic4 = useMagnetic<HTMLAnchorElement>(0.2);
  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Section glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-2xl md:text-3xl font-pixel mb-6 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text inline-flex items-center gap-3">
            <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 animate-pixel-bounce flex-shrink-0" />
            &gt;&gt; CONNECT
          </span>
        </h2>
        
        <p className="text-center text-muted-foreground font-sans text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          &gt; Open to new projects and opportunities
        </p>
        
        <div className="glass-strong p-4 sm:p-8 md:p-12 border border-primary/10 glow-on-hover">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            <a
              ref={magnetic1.ref}
              onMouseMove={magnetic1.handleMouseMove}
              onMouseLeave={magnetic1.handleMouseLeave}
              href="mailto:anaswagih35@gmail.com"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 glass interactive-hover glow-on-hover group border border-border hover:border-primary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-3 sm:p-4 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Mail className="w-5 sm:w-7 h-5 sm:h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">Email</p>
                <p className="font-bold text-sm sm:text-base md:text-lg truncate">anaswagih35@gmail.com</p>
              </div>
            </a>
            
            <a
              ref={magnetic2.ref}
              onMouseMove={magnetic2.handleMouseMove}
              onMouseLeave={magnetic2.handleMouseLeave}
              href="tel:+201020065576"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 glass interactive-hover glow-on-hover group border border-border hover:border-secondary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-3 sm:p-4 bg-secondary/20 group-hover:bg-secondary/40 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Phone className="w-5 sm:w-7 h-5 sm:h-7 text-secondary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">Phone</p>
                <p className="font-bold text-sm sm:text-base md:text-lg truncate">+20 102 006 5576</p>
              </div>
            </a>
            
            <a
              ref={magnetic3.ref}
              onMouseMove={magnetic3.handleMouseMove}
              onMouseLeave={magnetic3.handleMouseLeave}
              href="https://www.linkedin.com/in/anas-wagih-9423a7232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 glass interactive-hover glow-on-hover group border border-border hover:border-accent/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-3 sm:p-4 bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Linkedin className="w-5 sm:w-7 h-5 sm:h-7 text-accent" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">LinkedIn</p>
                <p className="font-bold text-sm sm:text-base md:text-lg truncate">AnasWagih</p>
              </div>
            </a>
            
            <a
              ref={magnetic4.ref}
              onMouseMove={magnetic4.handleMouseMove}
              onMouseLeave={magnetic4.handleMouseLeave}
              href="https://github.com/AnasWagih25"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 glass interactive-hover glow-on-hover group border border-border hover:border-primary/30 magnetic-hover relative overflow-hidden"
              onClick={(e) => createRipple(e)}
            >
              <div className="p-3 sm:p-4 bg-primary/20 group-hover:bg-primary/40 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <Github className="w-5 sm:w-7 h-5 sm:h-7 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1 font-medium">GitHub</p>
                <p className="font-bold text-sm sm:text-base md:text-lg truncate">AnasWagih25</p>
              </div>
            </a>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 p-4 glass">
            <div className="p-3 bg-secondary/20 flex-shrink-0">
              <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-medium text-sm sm:text-base">Cairo, Egypt</p>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 text-center">
            <Button
              asChild
              size="lg"
              className="group"
            >
              <a href="mailto:anaswagih35@gmail.com">
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send me a message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
