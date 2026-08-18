import { useState } from 'react';
import { Star, X } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export function TestimonialsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  if (selectedImage && typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
  } else if (typeof window !== 'undefined') {
    document.body.style.overflow = 'unset';
  }

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
              <div 
                className="bg-[#FFFFFF] p-1.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xs sm:shadow-sm border border-[#DCD6CA]/50 overflow-hidden hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 duration-300"
                onClick={() => setSelectedImage(imgUrl)}
              >
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

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={selectedImage}
              alt="Depoimento Ampliado"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
