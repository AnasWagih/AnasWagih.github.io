import { Code, Cpu, Wrench, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useRipple } from "@/hooks/useRipple";
import PixelWindow from "./PixelWindow";

const Skills = () => {
  const createRipple = useRipple();
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "R", "C++", "Embedded C", "MATLAB", "VHDL", "JavaScript"],
      color: "primary"
    },
    {
      title: "Embedded & Hardware",
      icon: Cpu,
      skills: ["AVR", "ARM", "ESP32", "nRF52840", "STM32", "Raspberry Pi", "Arduino", "PIC"],
      color: "secondary"
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: ["KiCAD", "Proteus", "VS Code", "Git", "STM32Cube", "Multisim", "ModelSim", "Altium"],
      color: "accent"
    },
    {
      title: "Tech & Frameworks",
      icon: Layers,
      skills: ["TensorFlow", "PyTorch", "OpenCV", "MQTT", "Matter", "PlatformIO", "Quasar", "TinyML"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-pixel mb-12 text-center">
          <span className="gradient-text">&gt;&gt; SKILLS & TECH</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const SkillCategory = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`transition-all duration-700 ${
                    isVisible ? 'reveal-scale opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <PixelWindow title={`${category.title.toLowerCase().replace(/\s+/g, '_')}.h`} className="h-full group">
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 sm:p-3 border-2 border-${category.color} bg-${category.color}/20 transition-transform hover:scale-110 flex-shrink-0`}>
                          <Icon className={`w-5 sm:w-6 h-5 sm:h-6 text-${category.color}`} />
                        </div>
                        <h3 className="text-sm sm:text-lg font-pixel">{category.title}</h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-pixel hover:scale-110 hover:bg-primary/20 transition-all cursor-default border-2 border-border bg-card"
                            onClick={(e) => createRipple(e)}
                            style={{ animationDelay: `${i * 50}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </PixelWindow>
                </div>
              );
            };
            
            return <SkillCategory key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
