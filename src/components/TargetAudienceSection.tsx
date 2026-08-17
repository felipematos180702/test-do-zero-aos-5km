import { CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

export const TARGET_AUDIENCE = [
  "Quer começar a correr, mas não sabe por onde começar.",
  "Já tentou correr outras vezes, mas teve dificuldade em manter uma rotina.",
  "Acha que “não nasceu para correr” ou que precisa estar em forma para começar.",
  "Tem uma rotina corrida e precisa de treinos que possam se adaptar à sua realidade.",
  "Quer cuidar da saúde, se movimentar mais e transformar a corrida em um hábito.",
  "Tem como objetivo conquistar seus primeiros 5 km, respeitando seu ritmo e o seu processo."
];

export function TargetAudienceSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-14">
      <div className="bg-[#FFFFFF] rounded-xl sm:rounded-3xl p-4 sm:p-10 border border-[#E0DACE] shadow-xs sm:shadow-sm">
        <div className="text-center mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#414A36]/10 text-[#414A36] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-2 sm:mb-3 border border-[#414A36]/20">
            <HeartHandshake className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Identificação</span>
          </div>
          <h2 className="font-serif-editorial text-xl sm:text-4xl font-bold text-[#22281D] italic mb-2 sm:mb-3">
            Esse programa é para você?
          </h2>
          <p className="font-sans-body text-xs sm:text-base text-[#686E5E] max-w-xl mx-auto text-justify mb-3 sm:mb-4">
            O <span className="font-semibold text-[#22281D]">Do Zero aos Cinco km</span> foi criado para mulheres que querem começar a correr, mesmo que hoje a corrida pareça distante da sua realidade.
          </p>
          <div className="inline-flex items-center gap-2 bg-[#414A36] text-[#FDF5E6] px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide shadow-xs mb-4 sm:mb-6">
            <span>É para você que:</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-8">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-[#F7F5F0] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E5DFD4]">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#414A36] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-[#22281D] leading-snug">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#414A36] text-[#FDF5E6] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl text-center sm:text-left flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 bg-[#545E48] rounded-full shrink-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D5CFB2]" />
          </div>
          <div>
            <h3 className="font-semibold text-[10px] sm:text-xs uppercase tracking-wider text-[#D5CFB2] mb-0.5 sm:mb-1">
              Nosso Propósito
            </h3>
            <p className="text-xs sm:text-base text-[#FDF5E6]/90 leading-relaxed italic text-justify whitespace-pre-wrap">
              {"Mostrar que a corrida também pode ser para você.\n\nUm caminho possível, progressivo e adaptável à vida real, para que você saia do zero e conquiste seus primeiros cinco km com orientação, segurança e confiança."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
