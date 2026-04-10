import { GraduationCap, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";
import PixelWindow from "./PixelWindow";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: educationRef, isVisible: educationVisible } = useScrollReveal();
  const { ref: factsRef, isVisible: factsVisible } = useScrollReveal();
  const createRipple = useRipple();

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-pixel mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-up opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">&gt;&gt; ABOUT ME</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            ref={educationRef}
            className={`transition-all duration-1000 ${
              educationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <PixelWindow title="education.txt" className="h-full group">
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 sm:p-3 bg-primary/20 border-2 border-primary flex-shrink-0">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-pixel">EDUCATION</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4 sm:pl-6 pb-6">
                    <h4 className="font-pixel text-xs sm:text-sm mb-3">B.SC. ECE</h4>
                    <p className="text-secondary font-pixel text-xs mb-2">ARAB ACADEMY</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3 font-pixel flex-wrap">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span>EGYPT</span>
                      <span className="mx-1 sm:mx-2">•</span>
                      <span>2022-2027</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">ABET-ACCREDITED, USA</p>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-pixel mb-1">&gt; COURSEWORK:</p>
                      <p>Physics, Circuits, ML, Microprocessors, Embedded Systems</p>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4 sm:pl-6">
                    <h4 className="font-pixel text-xs sm:text-sm mb-2">IGCSE</h4>
                    <p className="text-secondary font-pixel text-xs mb-2">NARMER SCHOOL</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-pixel flex-wrap">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span>CAIRO</span>
                      <span className="mx-1 sm:mx-2">•</span>
                      <span>2019-2022</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">CAMBRIDGE & PEARSON, UK</p>
                  </div>
                </div>
              </div>
            </PixelWindow>
          </div>
          
          <div 
            ref={factsRef}
            className={`transition-all duration-1000 ${
              factsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <PixelWindow title="stats.json" className="h-full group">
              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-pixel mb-6 gradient-text-secondary">&gt;&gt; STATS</h3>
                
                <div className="space-y-6">
                  <div className="group/item">
                    <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; LOCATION</p>
                    <p className="text-sm font-pixel flex items-center gap-2 group-hover/item:translate-x-2 transition-transform">
                      <MapPin className="w-4 h-4 text-primary group-hover/item:scale-110 transition-transform flex-shrink-0" />
                      CAIRO, EGYPT
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-3 text-xs font-pixel">&gt; FOCUS AREAS</p>
                    <div className="flex flex-wrap gap-2">
                      {["IOT DEV", "EMBEDDED", "AI", "SMART HOME"].map((area, i) => (
                        <span 
                          key={i}
                          className="px-3 sm:px-4 py-2 text-xs font-pixel hover:scale-110 hover:bg-primary/20 transition-all cursor-default border-2 border-primary/50 bg-card"
                          onClick={(e) => createRipple(e)}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; INTERESTS</p>
                    <p className="text-xs leading-relaxed">
                      Building intelligent embedded systems that leverage AI and IoT technologies to solve real-world problems.
                      Passionate about the intersection of hardware and software.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-2 text-xs font-pixel">&gt; CURRENTLY</p>
                    <p className="text-xs leading-relaxed">
                      R&D Intern at Clixsys, developing electronics-based smart home solutions and AI-powered mobile applications. I'm now focused on sharpening my skills in PCB design and deploying fully functional ML/DL pipelines.
                    </p>
                  </div>
                </div>
              </div>
            </PixelWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
