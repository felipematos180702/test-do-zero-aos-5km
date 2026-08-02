import { ABOUT_DATA, HERO_DATA } from '../data';
import { MessageCircle, Heart, Users, Award, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const whatsappUrl = `https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent(ABOUT_DATA.whatsappMessage)}`;

  return (
    <section className="w-full bg-[#414A36] text-[#EFECE6] py-16 sm:py-20 px-4 sm:px-6 my-10 relative overflow-hidden">
      {/* Background organic design accents */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#545E48] rounded-full blur-2xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#2C3324] rounded-full blur-2xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#545E48]">
            <img 
              src={ABOUT_DATA.image} 
              alt="Pri Cardoso" 
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== HERO_DATA.fallbackPhotoUrl) {
                  e.currentTarget.src = HERO_DATA.fallbackPhotoUrl;
                }
              }}
              className="w-full h-full object-cover"
            />
            {/* Subtle bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#414A36] via-[#414A36]/10 to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#545E48]/80 text-[#EFECE6] text-[11px] sm:text-xs font-semibold uppercase tracking-widest px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full mb-4 sm:mb-6 border border-[#636E56]/60">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D8D2C5]" />
            <span>Comunidade & Propósito</span>
          </div>

          {/* Title */}
          <h2 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 italic text-white leading-tight">
            {ABOUT_DATA.title}
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 font-sans-body text-sm sm:text-base text-[#DCD6CA] leading-relaxed mb-8 text-justify">
            {ABOUT_DATA.paragraphs.map((p, idx) => (
              <p key={idx} className="tracking-wide">
                {p}
              </p>
            ))}
          </div>

          {/* Pillars / Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
            <div className="bg-[#353C2C]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#525B46] flex items-center gap-3">
              <Users className="w-5 h-5 text-[#D5CFB2] shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Comunidade</p>
                <p className="text-[11px] text-[#C2BCB0]">Mulheres</p>
              </div>
            </div>
            
            <div className="bg-[#353C2C]/80 backdrop-blur-xs p-3.5 rounded-xl border border-[#525B46] flex items-center gap-3">
              <Award className="w-5 h-5 text-[#D5CFB2] shrink-0" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Metodologia</p>
                <p className="text-[11px] text-[#C2BCB0]">Do zero aos cinco km</p>
              </div>
            </div>
          </div>

          {/* Pill Button (Highlight CTA) */}
          <div className="pt-2 flex justify-center lg:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-[#FFFFFF] hover:bg-[#F2EEE7] text-[#22281D] px-6 sm:px-8 py-3.5 rounded-full shadow-md text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              <MessageCircle className="w-5 h-5 text-[#414A36]" />
              <span>{ABOUT_DATA.whatsappCTA}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
