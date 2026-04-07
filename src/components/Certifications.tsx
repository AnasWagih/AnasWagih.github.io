import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PixelWindow from "./PixelWindow";

const Certifications = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const certifications = [
    {
      title: "Machine Learning",
      issuer: "DeepLearning.AI",
      courses: "3 Courses",
      link: "https://coursera.org/share/5142a9edb67ef1fdd43f9012443603c9",
      status: "Completed"
    },
    {
      title: "Deep Learning",
      issuer: "DeepLearning.AI",
      courses: "5 Courses",
      link: "",
      status: "Completed"
    },
    {
      title: "Advanced Embedded Systems",
      issuer: "ArmEducationX",
      courses: "2 Courses",
      link: "http://credentials.edx.org/credentials/d6f113333f9442a48f7860206b88cac4/",
      status: "Completed"
    },
    {
      title: "ARM Cortex-M",
      issuer: "ArmEducationX",
      courses: "4 Courses",
      link: "https://coursera.org/share/d487e16df055fc747abf454e14d7f9f8",
      status: "Completed"
    },
    {
      title: "Python Certification",
      issuer: "HackerRank",
      courses: "",
      link: "https://www.hackerrank.com/certificates/iframe/c97729ed98bb",
      status: "Completed"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <h2 
          ref={headerRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-pixel mb-12 text-center transition-all duration-1000 ${
            headerVisible ? 'reveal-scale opacity-100' : 'opacity-0'
          }`}
        >
          <span className="gradient-text">&gt;&gt; ACHIEVEMENTS</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const CertCard = () => {
              const { ref, isVisible } = useScrollReveal();
              
              return (
                <div
                  ref={ref}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <PixelWindow title={`cert_${index + 1}.key`} className="h-full group">
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 border-2 border-primary bg-primary/20 mt-1 flex-shrink-0">
                          <Award className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-pixel text-xs sm:text-sm mb-2 leading-tight break-words">
                            {cert.title}
                          </h3>
                          <p className="text-xs text-secondary font-pixel mb-1">{cert.issuer}</p>
                          {cert.courses && <p className="text-xs text-muted-foreground">{cert.courses}</p>}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-border gap-2">
                        <span
                          className={`text-xs px-2 sm:px-3 py-1 font-pixel border-2 whitespace-nowrap ${
                            cert.status === "Completed"
                              ? "bg-primary/20 text-primary border-primary"
                              : "bg-accent/20 text-accent border-accent"
                          }`}
                        >
                          {cert.status === "Completed" ? "✓ DONE" : "⚡ WIP"}
                        </span>
                        {cert.link ? (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:scale-110 transition-transform p-2 h-auto flex-shrink-0"
                            asChild
                          >
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        ) : (
                          <div className="opacity-50 p-2 flex-shrink-0">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </div>
                  </PixelWindow>
                </div>
              );
            };
            
            return <CertCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
