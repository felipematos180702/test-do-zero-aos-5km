import { useState } from 'react';
import { FAQ_DATA, HERO_DATA } from '../data';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default open first item for good UX

  const toggleAccordion = (id: string) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section className="w-full max-w-2xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 text-[#414A36] text-[10px] sm:text-xs font-semibold uppercase tracking-widest bg-[#E5DFD4] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full mb-2">
          <HelpCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span>Esclareça suas dúvidas</span>
        </div>

        <h2 className="font-serif-editorial text-2xl sm:text-4xl font-bold italic text-[#22281D]">
          Dúvidas Frequentes
        </h2>
        <p className="font-sans-body text-xs sm:text-sm text-[#686E5E] max-w-md mx-auto mt-1">
          Tudo o que você precisa saber para dar o primeiro passo com segurança.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5 sm:space-y-3">
        {FAQ_DATA.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-[#FFFFFF] border border-[#E0DACE] rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#D0C8B8]"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full p-3.5 sm:p-5 text-left flex items-center justify-between gap-3 font-sans-body font-semibold text-xs sm:text-base text-[#22281D] hover:text-[#414A36] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="leading-snug">{faq.question}</span>
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FDF5E6] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#414A36] text-[#FDF5E6]' : 'text-[#686E5E]'
                  }`}
                >
                  <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </button>

              {/* Accordion Content */}
              {isOpen && (
                <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#686E5E] leading-relaxed border-t border-[#F5F2EC] pt-2.5 font-sans-body animate-fadeIn text-justify whitespace-pre-wrap">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="mt-6 sm:mt-8 bg-[#E5E0D5]/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-[#D5CFB2]/50 text-center flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs sm:text-sm text-[#22281D] font-medium">
          Ainda tem alguma dúvida específica sobre a sua rotina?
        </span>
        <a
          href={`https://wa.me/${HERO_DATA.whatsappNumber}?text=${encodeURIComponent("Olá Pri! Tenho uma dúvida sobre a assessoria.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-[#414A36] hover:bg-[#343B2B] text-[#FDF5E6] px-3.5 py-2 rounded-full text-xs font-semibold shrink-0 transition-colors shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Tirar dúvida no WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
