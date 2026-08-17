import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export function TestimonialsSection() {
  return (
    <section className="w-full py-10 sm:py-16 px-3 sm:px-6 flex flex-col items-center bg-[#FDF5E6]">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#545E48]/10 text-[#414A36] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-3 border border-[#545E48]/20">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            <span>Resultados Reais</span>
          </div>
          <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#22281D] italic mb-2 sm:mb-4">
            Veja a transformação de algumas mulheres que confiaram.
          </h2>
          <p className="font-sans-body text-xs sm:text-base text-[#686E5E] max-w-2xl mx-auto">
            Veja as transformações de quem confiou na metodologia e saiu do zero para a corrida.
          </p>
        </div>

        {/* Testimonials Grid (Masonry or CSS Columns for tall images) */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
          {TESTIMONIALS_DATA.map((imgUrl, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="bg-[#FFFFFF] p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xs sm:shadow-sm border border-[#DCD6CA]/50 overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={imgUrl}
                  alt={`Depoimento ${index + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto rounded-lg sm:rounded-xl object-contain bg-[#FDF5E6]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
