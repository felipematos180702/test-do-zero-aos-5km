export function HeroSection() {
  return (
    <section className="relative w-full pt-10 pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle organic background accent glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DED6CA]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Styled Name in Serif Editorial */}
      <h1 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#22281D] mb-4 italic max-w-4xl leading-tight">
        Descubra como sair do zero e conquistar seus primeiros 5km com segurança
      </h1>

      {/* Welcome Phrase in soft italic */}
      <p className="font-sans-body text-base sm:text-lg text-[#22281D]/80 max-w-2xl mb-10 leading-relaxed">
        Um programa exclusivo de corrida criado para mulheres e mães que desejam resgatar a força, disposição e autoestima através de uma rotina de treinos eficiente.
      </p>

      {/* VSL Video Container */}
      <div className="relative w-full max-w-3xl rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-[#FFFFFF] bg-[#22281D] aspect-video z-10">
        <iframe
          src="https://drive.google.com/file/d/1fHiWTpUaV4PNWMXpPSAIzRStrHqODMAs/preview"
          title="VSL Do Zero aos 5km"
          className="w-full h-full object-cover"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Scroll indicator or subtle text below video */}
      <p className="mt-6 text-sm font-medium tracking-wide uppercase text-[#686E5E]">
        Assista ao vídeo acima para entender como funciona o programa
      </p>
    </section>
  );
}

