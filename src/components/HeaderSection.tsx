import { HERO_DATA } from '../data';

export function HeaderSection() {
  const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos');
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDF5E6]/90 backdrop-blur-md border-b border-[#E5DFD4] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-4">
        {/* Brand Logo with overlap */}
        <div className="relative flex items-center w-28 sm:w-40 md:w-44 h-10 sm:h-12">
          <img
            src={HERO_DATA.logoUrl}
            alt={`Logo ${HERO_DATA.name}`}
            className="absolute left-0 top-1/2 -translate-y-1/2 h-20 sm:h-28 md:h-32 w-auto object-contain transition-all duration-300 drop-shadow-md select-none pointer-events-none"
          />
        </div>

        {/* Action Button */}
        <button
          onClick={scrollToPlanos}
          className="bg-[#414A36] hover:bg-[#343b2b] text-[#FDF5E6] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm active:scale-95 whitespace-nowrap"
        >
          Escolher o meu plano
        </button>
      </div>
    </header>
  );
}
