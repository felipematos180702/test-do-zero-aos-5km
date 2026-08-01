import { useEffect, useRef } from 'react';

export function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const subscribeToEvents = () => {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        // Subscribe to Vimeo events via postMessage API
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'finish' }),
          '*'
        );
        iframeRef.current.contentWindow.postMessage(
          JSON.stringify({ method: 'addEventListener', value: 'ended' }),
          '*'
        );
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes('vimeo.com')) return;
      try {
        const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
        if (data && iframeRef.current && iframeRef.current.contentWindow) {
          // Ready event fired by Vimeo -> subscribe
          if (data.event === 'ready') {
            subscribeToEvents();
          }
          // When video finishes, automatically reset to 0:00 and pause to prevent Vimeo end screen
          if (data.event === 'finish' || data.event === 'ended') {
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ method: 'setCurrentTime', value: 0 }),
              '*'
            );
            iframeRef.current.contentWindow.postMessage(
              JSON.stringify({ method: 'pause' }),
              '*'
            );
          }
        }
      } catch {
        // Ignore non-json messages
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Initial attempt to subscribe after mount
    const timer = setTimeout(subscribeToEvents, 1000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative w-full pt-10 pb-12 md:pt-16 md:pb-16 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle organic background accent glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DED6CA]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Styled Title */}
      <h1 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#22281D] mb-4 italic max-w-4xl leading-tight">
        Descubra como sair do zero e conquistar seus primeiros 5km com segurança
      </h1>

      {/* Subtitle */}
      <p className="font-sans-body text-sm sm:text-lg text-[#22281D]/80 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
        Um programa exclusivo de corrida criado para mulheres e mães que desejam resgatar a força, disposição e autoestima através de uma rotina de treinos eficiente.
      </p>

      {/* VSL Video Container */}
      <div className="relative w-full max-w-3xl rounded-xl sm:rounded-[1.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#FFFFFF] bg-[#22281D] aspect-video z-10">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1214818212?title=0&byline=0&portrait=0&badge=0&autopause=0&loop=1&api=1&player_id=vsl_player"
          title="VSL Do Zero aos 5km"
          className="w-full h-full object-cover"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Scroll indicator text */}
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#686E5E]">
        Assista ao vídeo acima para entender como funciona o programa
      </p>
    </section>
  );
}
