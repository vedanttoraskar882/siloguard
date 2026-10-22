import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Platform } from './components/Platform';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';
import { PrivacyNoticeModal } from './components/PrivacyNoticeModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [isPrivacyNoticeOpen, setIsPrivacyNoticeOpen] = useState(false);
  const [triggerRef, setTriggerRef] = useState<React.RefObject<HTMLElement | null> | null>(null);

  const handleOpenPilotModal = (btnRef?: React.RefObject<HTMLElement | null>) => {
    if (btnRef) {
      setTriggerRef(btnRef);
    }
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onRequestPilot={handleOpenPilotModal} />

      {/* Main Content Sections (Strictly 1 to 6) */}
      <main className="flex-grow">
        {/* 1. Home */}
        <Hero onRequestPilot={handleOpenPilotModal} />

        {/* 2. About */}
        <About />

        {/* 3. Platform */}
        <Platform />

        {/* 4. How it works */}
        <HowItWorks />

        {/* 5. Market Pricing */}
        <Pricing onRequestPilot={handleOpenPilotModal} />

        {/* 6. FAQ */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer
        onRequestPilot={handleOpenPilotModal}
        onOpenPrivacyNotice={() => setIsPrivacyNoticeOpen(true)}
      />

      {/* Accessible Modals */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        triggerRef={triggerRef}
      />

      <PrivacyNoticeModal
        isOpen={isPrivacyNoticeOpen}
        onClose={() => setIsPrivacyNoticeOpen(false)}
      />
    </div>
  );
};

export default App;
