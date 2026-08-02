import { HeaderSection } from './components/HeaderSection';
import { HeroSection } from './components/HeroSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { CardSection } from './components/CardSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { HERO_DATA } from './data';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#22281D] font-sans-body flex flex-col justify-between selection:bg-[#414A36] selection:text-[#EFECE6]">
      {/* Header */}
      <HeaderSection />

      {/* Main Container */}
      <main className="w-full flex-1">
        {/* 1. Hero Section (VSL) */}
        <HeroSection />

        {/* 2. Target Audience (Para quem é) Section - Below VSL */}
        <TargetAudienceSection />

        {/* 3. Link Cards Section (Plans: Com Assessoria / Sem Assessoria) */}
        <CardSection />

        {/* 4. Testimonials Section */}
        <TestimonialsSection />

        {/* 5. About Section (Dark Olive #414A36) */}
        <AboutSection />

        {/* 6. FAQ Accordion Section */}
        <FaqSection />
      </main>

      {/* 7. Footer */}
      <FooterSection />

      {/* Floating Quick WhatsApp Button for Mobile */}
      <a
        href={`https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent("Olá Pri! Vim pelo seu site e gostaria de conversar sobre o programa Do zero aos cinco km.")}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Falar com Pri Cardoso no WhatsApp"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 bg-[#414A36] text-[#EFECE6] p-3.5 sm:p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-[#FFFFFF]/30 group"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
}
