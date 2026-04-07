import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";
import { useMagnetic } from "@/hooks/useMagnetic";
import PixelWindow from "./PixelWindow";

const Contact = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const createRipple = useRipple();
  const magnetic1 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic2 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic3 = useMagnetic<HTMLAnchorElement>(0.2);
  const magnetic4 = useMagnetic<HTMLAnchorElement>(0.2);
  return (
    <section id="contact" className="py-20 px-4 relative">
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
        
        <PixelWindow title="contact.sh" className="group">
          <div className="p-4 sm:p-8 md:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a
                ref={magnetic1.ref}
                onMouseMove={magnetic1.handleMouseMove}
                onMouseLeave={magnetic1.handleMouseLeave}
                href="mailto:anaswagih35@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-border bg-muted/20 hover:border-primary/50 transition-all group/link"
                onClick={(e) => createRipple(e)}
              >
                <div className="p-3 bg-primary/20 group-hover/link:bg-primary/40 transition-all duration-300 group-hover/link:scale-110 flex-shrink-0 border-2 border-primary/30">
                  <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1 font-pixel">EMAIL</p>
                  <p className="font-pixel text-xs sm:text-sm truncate">anaswagih35@gmail.com</p>
                </div>
              </a>
              
              <a
                ref={magnetic2.ref}
                onMouseMove={magnetic2.handleMouseMove}
                onMouseLeave={magnetic2.handleMouseLeave}
                href="tel:+201020065576"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-border bg-muted/20 hover:border-secondary/50 transition-all group/link"
                onClick={(e) => createRipple(e)}
              >
                <div className="p-3 bg-secondary/20 group-hover/link:bg-secondary/40 transition-all duration-300 group-hover/link:scale-110 flex-shrink-0 border-2 border-secondary/30">
                  <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1 font-pixel">PHONE</p>
                  <p className="font-pixel text-xs sm:text-sm truncate">+20 102 006 5576</p>
                </div>
              </a>
              
              <a
                ref={magnetic3.ref}
                onMouseMove={magnetic3.handleMouseMove}
                onMouseLeave={magnetic3.handleMouseLeave}
                href="https://www.linkedin.com/in/anas-wagih-9423a7232/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-border bg-muted/20 hover:border-accent/50 transition-all group/link"
                onClick={(e) => createRipple(e)}
              >
                <div className="p-3 bg-accent/20 group-hover/link:bg-accent/40 transition-all duration-300 group-hover/link:scale-110 flex-shrink-0 border-2 border-accent/30">
                  <Linkedin className="w-5 sm:w-6 h-5 sm:h-6 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1 font-pixel">LINKEDIN</p>
                  <p className="font-pixel text-xs sm:text-sm truncate">AnasWagih</p>
                </div>
              </a>
              
              <a
                ref={magnetic4.ref}
                onMouseMove={magnetic4.handleMouseMove}
                onMouseLeave={magnetic4.handleMouseLeave}
                href="https://github.com/AnasWagih25"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 border-2 border-border bg-muted/20 hover:border-primary/50 transition-all group/link"
                onClick={(e) => createRipple(e)}
              >
                <div className="p-3 bg-primary/20 group-hover/link:bg-primary/40 transition-all duration-300 group-hover/link:scale-110 flex-shrink-0 border-2 border-primary/30">
                  <Github className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1 font-pixel">GITHUB</p>
                  <p className="font-pixel text-xs sm:text-sm truncate">AnasWagih25</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 p-4 border-2 border-border bg-muted/20">
              <div className="p-3 bg-secondary/20 flex-shrink-0 border-2 border-secondary/30">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-secondary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground mb-1 font-pixel">LOCATION</p>
                <p className="font-pixel text-xs sm:text-sm">Cairo, Egypt</p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <Button asChild size="lg" className="group font-pixel">
                <a href="mailto:anaswagih35@gmail.com">
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  SEND MESSAGE
                </a>
              </Button>
            </div>
          </div>
        </PixelWindow>
      </div>
    </section>
  );
};

export default Contact;
