/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AudienceSection } from './components/AudienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer';
import { InfoModal } from './components/InfoModal';
import { ModalTopic } from './config/siteConfig';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalTopic>(null);

  const handleNavigateSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#111827]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-xl focus:bg-[#0B3D46] focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-float"
      >
        Skip to main content
      </a>

      <Header
        onNavigateSection={handleNavigateSection}
        onOpenModal={setActiveModal}
      />

      <main id="main-content" className="flex-1">
        <HeroSection onOpenModal={setActiveModal} />
        <CapabilitiesSection />
        <HowItWorksSection />
        <AudienceSection />
        <PhilosophySection />
        <PricingSection onOpenModal={setActiveModal} />
      </main>

      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenModal={setActiveModal}
      />

      <InfoModal
        topic={activeModal}
        onClose={() => setActiveModal(null)}
        onNavigateSection={handleNavigateSection}
      />
    </div>
  );
}
