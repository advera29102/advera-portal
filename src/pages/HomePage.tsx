import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import PricingPreviewSection from '../components/sections/PricingPreviewSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import TimelineSection from '../components/sections/TimelineSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTASection from '../components/sections/FinalCTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingPreviewSection />
      <SocialProofSection />
      <TimelineSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
};

export default HomePage;
