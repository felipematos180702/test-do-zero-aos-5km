import { HERO_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderSectionProps {
  isScrolled: boolean;
}

export function HeaderSection({ isScrolled }: HeaderSectionProps) {
  const scrollToPlanos = () => {
    const planosSection = document.getElementById('planos');
    if (planosSection) {
      planosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDF5E6]/90 backdrop-blur-md border-b border-[#E5DFD4]' 
          : 'bg-transparent border-b-0 border-transparent pointer-events-none'
      }`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-300 flex items-center justify-between gap-4 ${isScrolled ? 'py-2 sm:py-3' : 'py-6 sm:py-8'}`}>
        
        {/* Brand Logo Container */}
        <div className="relative flex items-center w-28 sm:w-40 md:w-44 h-10 sm:h-12">
          <AnimatePresence>
            {isScrolled && (
              <motion.img
                layoutId="hero-logo"
                src={HERO_DATA.logoUrl}
                alt={`Logo ${HERO_DATA.name}`}
                className="absolute left-0 top-1/2 -translate-y-1/2 h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-md select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <motion.button
          onClick={scrollToPlanos}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: isScrolled ? 1 : 0, 
            scale: isScrolled ? 1 : 0.9,
            pointerEvents: isScrolled ? 'auto' : 'none' 
          }}
          transition={{ duration: 0.3 }}
          className="bg-[#414A36] hover:bg-[#343b2b] text-[#FDF5E6] px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 shadow-sm active:scale-95 whitespace-nowrap"
        >
          Escolher o meu plano
        </motion.button>
      </div>
    </motion.header>
  );
}
