import { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { HERO_DATA } from '../data';

export function HeroSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Send a command to the Vimeo player via postMessage
  const postCommand = (method: string, value?: any) => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ method, value }),
        '*'
      );
    }
  };

  useEffect(() => {
    const subscribeToEvents = () => {
      postCommand('addEventListener', 'finish');
      postCommand('addEventListener', 'ended');
      postCommand('addEventListener', 'play');
      postCommand('addEventListener', 'pause');
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
          // Handle remote events to keep local state synchronized
          if (data.event === 'play') {
            setIsPlaying(true);
          }
          if (data.event === 'pause') {
            setIsPlaying(false);
          }
          // When video finishes, automatically reset to 0:00 and loop seamlessly
          if (data.event === 'finish' || data.event === 'ended') {
            postCommand('setCurrentTime', 0);
            postCommand('play');
            setIsPlaying(true);
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

  const togglePlay = () => {
    if (isPlaying) {
      postCommand('pause');
      setIsPlaying(false);
    } else {
      postCommand('play');
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full pt-6 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle organic background accent glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DED6CA]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Styled Title */}
      <h1 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#22281D] mb-4 italic max-w-4xl leading-tight text-justify">
        Descubra como sair <span className="underline decoration-[#79856A] decoration-[3px] underline-offset-4 not-italic font-bold">do zero</span> e conquistar seus <span className="underline decoration-[#79856A] decoration-[3px] underline-offset-4 not-italic font-bold">primeiros cinco km</span> com segurança
      </h1>

      {/* Subtitle */}
      <p className="font-sans-body text-sm sm:text-lg text-[#22281D]/80 max-w-2xl mb-8 sm:mb-10 leading-relaxed text-justify">
        Um programa exclusivo de corrida criado para mulheres que desejam resgatar a força, disposição e autoestima através de uma rotina de treinos eficiente.
      </p>

      {/* VSL Video Container */}
      <div className="relative w-full max-w-3xl rounded-xl sm:rounded-[1.5rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-[#FFFFFF] bg-[#22281D] aspect-video z-10 group">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1214818212?title=0&byline=0&portrait=0&badge=0&autopause=0&loop=1&api=1&player_id=vsl_player&controls=0"
          title="VSL Do zero aos cinco km"
          className="w-full h-full object-cover pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Custom Poster Image */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 bg-cover bg-center z-[15]"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/d/1muCTQGNPNIhor73OdG68-Rlxnk6C6KqV')` }}
          />
        )}

        {/* Elegant Minimalist Overlay & Custom Controls */}
        <div
          onClick={togglePlay}
          className={`absolute inset-0 z-20 cursor-pointer flex items-center justify-center transition-all duration-300 ${
            isPlaying 
              ? 'bg-transparent hover:bg-black/25' 
              : 'bg-black/30 backdrop-blur-[2px]'
          }`}
        >
          {!isPlaying ? (
            /* Custom minimalist Play button */
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#FDF5E6]/40 bg-[#FDF5E6]/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-[#FDF5E6]/80 hover:bg-[#FDF5E6]/25 shadow-lg">
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDF5E6] fill-[#FDF5E6] translate-x-0.5" />
            </div>
          ) : (
            /* Subtle hover Pause button when video is playing */
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#FDF5E6]/20 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-[#FDF5E6] fill-[#FDF5E6]" />
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator text */}
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#686E5E]">
        Assista ao vídeo acima para entender como funciona o programa
      </p>
    </section>
  );
}
