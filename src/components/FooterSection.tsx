import { HERO_DATA } from '../data';
import { Instagram, Heart, ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#DCD6CA] bg-[#FDF5E6] py-10 px-4 sm:px-6 text-center text-[#686E5E]">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          title="Voltar ao topo"
          className="p-2.5 rounded-full bg-[#FFFFFF] border border-[#DCD6CA] text-[#414A36] hover:bg-[#414A36] hover:text-[#FDF5E6] transition-all duration-300 shadow-2xs group mb-2"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

        {/* Minimalist Instagram Icon Link */}
        <a
          href={HERO_DATA.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#22281D] hover:text-[#414A36] transition-colors p-2"
        >
          <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#DCD6CA] flex items-center justify-center">
            <Instagram className="w-4 h-4 text-[#414A36]" />
          </div>
          <span>{HERO_DATA.instagramHandle}</span>
        </a>

        {/* Copyright Text */}
        <p className="text-xs text-[#686E5E] font-sans-body tracking-wide">
          {HERO_DATA.instagramHandle} • Todos os direitos reservados.
        </p>

        {/* Tagline */}
        <p className="text-[11px] text-[#8C9283] font-serif-editorial italic flex items-center justify-center gap-1 mt-1">
          <span>Corrida e Maternidade com propósito</span>
          <Heart className="w-3 h-3 text-[#414A36] inline" />
        </p>
      </div>
    </footer>
  );
}
