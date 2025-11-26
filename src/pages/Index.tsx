import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Dashboard from "@/components/Dashboard";
import FullPageView from "@/components/FullPageView";
import BackgroundOrbs from "@/components/BackgroundOrbs";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSelectSection = (section: string) => {
    setSelectedSection(section);
  };

  const handleCloseSection = () => {
    setSelectedSection(null);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}
      <div className={`min-h-screen relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <BackgroundOrbs />
        
        <AnimatePresence mode="wait">
          {!selectedSection ? (
            <Dashboard
              key="dashboard"
              onSelectSection={handleSelectSection}
              selectedSection={selectedSection}
            />
          ) : (
            <FullPageView
              key="fullpage"
              sectionId={selectedSection}
              onClose={handleCloseSection}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Index;
