import { MouseEvent } from 'react';
import { LINK_CARDS } from '../data';
import { LinkCard } from '../types';
import { ArrowRight, ShoppingCart, Sparkles } from 'lucide-react';

interface CardSectionProps {
  onSelectCard?: (card: LinkCard) => void;
}

export function CardSection({ onSelectCard }: CardSectionProps) {
  const handleCheckout = (card: LinkCard, e: MouseEvent) => {
    e.stopPropagation();
    if (card.checkoutUrl) {
      window.open(card.checkoutUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="planos" className="w-full max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-5 sm:mb-8 pb-3 sm:pb-4 border-b border-[#D8D2C5]/60">
        <span className="font-serif-editorial text-xl sm:text-3xl italic text-[#414A36] font-semibold tracking-wider">
          Escolha o seu plano
        </span>
        <span className="text-[11px] sm:text-xs font-sans-body uppercase tracking-widest text-[#686E5E]">
          {LINK_CARDS.length} opções
        </span>
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">
        {LINK_CARDS.map((card) => (
          <div
            key={card.id}
            className="group relative bg-[#FFFFFF] rounded-xl sm:rounded-3xl p-4 sm:p-8 border border-[#E0DACE] shadow-xs sm:shadow-sm flex flex-col items-stretch justify-between"
          >
            {/* Top Accent bar for highlighted card */}
            {card.badge && (
              <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-[#414A36] rounded-t-xl sm:rounded-t-3xl" />
            )}

            <div>
              {/* Thumbnail Image */}
              <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] mb-4 sm:mb-6 rounded-lg sm:rounded-2xl overflow-hidden shrink-0 bg-[#FDF5E6] border border-[#E5DFD4]">
                <img
                  src={card.image}
                  alt={card.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (card.fallbackImage && e.currentTarget.src !== card.fallbackImage) {
                      e.currentTarget.src = card.fallbackImage;
                    }
                  }}
                  style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
                  className="w-full h-full object-cover object-[center_12%] sm:object-center scale-110 sm:scale-100 origin-top transition-transform duration-300"
                />
              </div>

              {/* Badge Header if exists */}
              {card.badge && (
                <div className="inline-flex items-center gap-1 bg-[#414A36]/10 text-[#414A36] text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-2 sm:mb-3 border border-[#414A36]/20">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#414A36]" />
                  <span>{card.badge}</span>
                </div>
              )}
              
              <h3 className="font-serif-editorial text-xl sm:text-3xl font-bold text-[#22281D] leading-snug mb-2 sm:mb-3 italic">
                {card.title}
              </h3>
              
              <p className="font-sans-body text-xs sm:text-base text-[#686E5E] leading-relaxed mb-4 sm:mb-6 font-medium text-justify whitespace-pre-wrap">
                {card.description}
              </p>

              {/* Additional Details */}
              <div className="space-y-4 sm:space-y-6 mb-5 sm:mb-8 text-left">
                {/* Como Funciona */}
                {card.howItWorks && (
                  <div>
                    <h4 className="font-semibold text-[#22281D] uppercase tracking-wider text-[11px] sm:text-xs mb-2 sm:mb-3">
                      {card.id === 'programa-5k' ? 'Com a Assessoria, você terá:' : 'Como Funciona:'}
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2 text-justify">
                      {card.howItWorks.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A4E43] leading-snug">
                          <Sparkles className="w-3.5 h-3.5 text-[#79856A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {card.purpose && (
                  <p className="text-xs sm:text-sm text-[#414A36] font-semibold italic mt-4 pt-3 border-t border-[#FDF5E6] text-justify">
                    {card.purpose}
                  </p>
                )}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 sm:pt-4 flex items-center justify-between border-t border-[#F2EEE7] mt-auto">
              {/* CTA Button */}
              <button
                onClick={(e) => handleCheckout(card, e)}
                className="inline-flex items-center gap-2 bg-[#414A36] hover:bg-[#343B2B] text-[#FDF5E6] px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-sm w-full justify-center"
              >
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{card.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
