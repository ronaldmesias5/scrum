import LandingHeader from '../components/LandingHeader';
import LandingFooter from '../components/LandingFooter';
import HeroSection from '../components/sections/HeroSection';
import CategoriesSection from '../components/sections/CategoriesSection';
import AsessoriaSection from '../components/sections/AsessoriaSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import CTAFinalSection from '../components/sections/CTAFinalSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <AsessoriaSection />
        <WhyChooseUsSection />
        <CTAFinalSection />
      </main>
      <LandingFooter />
    </div>
  );
}
