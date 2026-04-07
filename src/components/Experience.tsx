import { Briefcase, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PixelWindow from "./PixelWindow";

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const experiences = [
    {
      role: "R&D Engineer",
      company: "Clixsys",
      period: "07/2025 – On-Going",
      description: [
        "Developed a cross-platform (iOS/Android) home automation app using Quasar + Capacitor, enabling MQTT-based device control through the app, expanding accessibility for end-users.",
        "Built an AI-powered in-app assistant using OpenAI's ChatGPT API to control smart home devices, provide real-time weather/time data, and support various AI voices—response time of approx. 2 seconds.",
        "Designed a MQTT-based multi-endpoint system that groups several functions under a single node, cutting controller boards per room by ~70% and ensuring more consistent, reliable control."
      ],
      color: "primary"
    },
    {
      role: "Embedded Systems Trainee",
      company: "National Telecommunication Institute",
      period: "08/2025 – 09/2025",
      description: [
        "Hands-on embedded C programming for AVR: GPIO, ADC, timers, interrupts, USART, SPI, I2C.",
        "Built a Dual-MCU STM32-Based Deadman Safety and Telemetry System for Electric Vehicles."
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-pixel mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">&gt;&gt; EXPERIENCE</span>
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const ExperienceCard = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <PixelWindow title={`${exp.company.toLowerCase()}_${exp.role.toLowerCase().replace(/\s+/g, '_')}.log`} className="group">
                    <div className="p-5 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 border-2 border-${exp.color} bg-${exp.color}/20 flex-shrink-0`}>
                              <Briefcase className={`w-4 sm:w-5 h-4 sm:h-5 text-${exp.color}`} />
                            </div>
                            <h3 className="text-base sm:text-xl font-pixel break-words">{exp.role}</h3>
                          </div>
                          <p className={`text-sm font-pixel text-${exp.color} mb-2`}>{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground font-pixel text-xs flex-shrink-0">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">{exp.period}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2 sm:gap-3 text-muted-foreground leading-relaxed text-xs sm:text-sm">
                            <span className={`text-${exp.color} font-pixel text-lg flex-shrink-0`}>▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </PixelWindow>
                </div>
              );
            };
            
            return <ExperienceCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
