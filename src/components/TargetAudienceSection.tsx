import { CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';

export const TARGET_AUDIENCE = [
  "Mulheres que nunca correram na vida e querem aprender.",
  "Mulheres que já correm e querem melhorar o desempenho.",
  "Quem deseja incluir exercícios físicos regularmente na rotina.",
  "Quem deseja emagrecer usando a corrida como estratégia.",
  "Mães e mulheres comuns com rotinas intensas de múltiplas funções."
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
            Para quem é o programa?
          </h2>
          <p className="font-sans-body text-xs sm:text-base text-[#686E5E] max-w-xl mx-auto text-justify">
            O método <span className="font-semibold text-[#22281D]">Do zero aos cinco km</span> foi desenhado para você que busca transformação e saúde com acolhimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 mb-5 sm:mb-8">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 bg-[#F7F5F0] p-3 sm:p-4 rounded-lg sm:rounded-xl border border-[#E5DFD4]">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#414A36] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-medium text-[#22281D] leading-snug">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#414A36] text-[#EFECE6] p-3.5 sm:p-6 rounded-xl sm:rounded-2xl text-center sm:text-left flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3 bg-[#545E48] rounded-full shrink-0">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D5CFB2]" />
          </div>
          <div>
            <h3 className="font-semibold text-[10px] sm:text-xs uppercase tracking-wider text-[#D5CFB2] mb-0.5 sm:mb-1">
              Nosso Propósito
            </h3>
            <p className="text-xs sm:text-base text-[#EFECE6]/90 leading-relaxed italic text-justify">
              "Resgatar a saúde e a autoestima de mulheres de forma gentil, facilitada e sem que elas precisem treinar sozinhas."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
