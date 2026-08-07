import { LinkCard, FAQItem } from './types';

// Images
import priPortraitLocal from './assets/images/pri_cardoso_portrait_1785159290085.jpg';
import cardProgram5kImg from './assets/images/card_program5k_1785159316331.jpg';
import cardPlanImg from './assets/images/card_plan_1785159330604.jpg';

export const HERO_DATA = {
  name: "Pri Cardoso",
  title: "Corrida & Maternidade",
  subtitle: "Assessoria Online do Zero aos Kms Desejados",
  welcomePhrase: "Um time exclusivo de corrida para mulheres.",
  logoUrl: "https://lh3.googleusercontent.com/d/1Y_8KoojtD1CwPbA1Alk5_Fayk_qiZiqE",
  googleDrivePhotoUrl: "https://lh3.googleusercontent.com/d/19xvGZtcFwSmK8pPvojo-N_bdoCWLaJu5",
  fallbackPhotoUrl: priPortraitLocal,
  instagramHandle: "@timepricardoso",
  instagramUrl: "https://instagram.com/timepricardoso",
  whatsappNumber: "5521969952261", // Editable default number
};

export const LINK_CARDS: LinkCard[] = [
  {
    id: "programa-5k",
    title: "Do zero aos cinco km (Com Assessoria)",
    description: "Acompanhamento completo com orientações individuais para você conquistar seus primeiros 5km com segurança.",
    badge: "Vagas Limitadas",
    ctaText: "Garantir Minha Vaga",
    image: "https://lh3.googleusercontent.com/d/1QhFyRD0HnzTnKeF-HzIJtCjZBHbBy4HT",
    fallbackImage: cardProgram5kImg,
    whatsappMessage: "Olá Pri! Gostaria de consultar a disponibilidade de vagas para a Assessoria Do zero aos cinco km de 10 Semanas.",
    tag: "Acompanhamento Individual",
    checkoutUrl: "https://pay.kiwify.com.br/1eDGuMf",
    targetAudience: [
      "Mulheres que nunca correram na vida e querem aprender.",
      "Mulheres que já correm e querem melhorar o desempenho.",
      "Quem deseja incluir exercícios físicos regularmente na rotina.",
      "Quem deseja emagrecer usando a corrida como estratégia.",
      "Mulheres com rotinas intensas de múltiplas funções."
    ],
    howItWorks: [
      "Conteúdo em plataforma digital segura.",
      "Grupo fechado e exclusivo no WhatsApp formado somente por mulheres.",
      "10 semanas de assessoria com acompanhamento, trocas, motivação e dúvidas tiradas diretamente com a Pri Cardoso.",
      "Treinos gravados de fortalecimento para fazer em casa, sem necessidade de academia ou de material específico."
    ],
    purpose: "Resgatar a saúde e a autoestima de mulheres de forma gentil, facilitada e sem que elas precisem treinar sozinhas."
  },
  {
    id: "planejamento",
    title: "Do zero aos cinco km (Sem Assessoria)",
    description: "Planilha e estrutura detalhada de treinos para quem deseja evoluir e treinar no seu próprio ritmo e horários.",
    ctaText: "Garantir Planilha",
    image: "https://lh3.googleusercontent.com/d/1muCTQGNPNIhor73OdG68-Rlxnk6C6KqV",
    fallbackImage: cardPlanImg,
    whatsappMessage: "Olá Pri! Gostaria de mais detalhes sobre o Planejamento Autônomo da planilha Do zero aos cinco km.",
    tag: "Treino Autônomo",
    checkoutUrl: "https://pay.kiwify.com.br/fRNaqyo",
    targetAudience: [
      "Mulheres que nunca correram na vida e querem aprender.",
      "Mulheres que já correm e querem melhorar o desempenho.",
      "Quem deseja incluir exercícios físicos regularmente na rotina.",
      "Quem deseja emagrecer usando a corrida como estratégia.",
      "Mulheres com rotinas intensas de múltiplas funções."
    ],
    howItWorks: [
      "Conteúdo em plataforma digital segura.",
      "Treinos gravados de fortalecimento para fazer em casa, sem necessidade de academia ou de material específico."
    ],
    purpose: "Resgatar a saúde e a autoestima de mulheres de forma gentil, facilitada."
  }
];

export const ABOUT_DATA = {
  title: "Sobre Mim & O Time",
  image: "https://lh3.googleusercontent.com/d/19xvGZtcFwSmK8pPvojo-N_bdoCWLaJu5",
  paragraphs: [
    "Acredito que a corrida é um poderoso portal de reconexão.",
    "Quando nos tornamos mães, é comum a rotina se desorganizar e os nossos desejos ficarem em segundo plano. A gente se perde um pouco de si mesma.",
    "O Time Pri Cardoso nasceu para resgatar a sua força, a sua disposição e a sua autoestima por meio de uma corrida consciente, eficiente e acolhedora.",
    "Aqui a gente respeita o seu ritmo real, de vida, sem cobranças impossíveis, e celebra cada quilômetro percorrido. Porque voltar para você também é um ato de coragem."
  ],
  whatsappCTA: "Fale Diretamente Comigo no WhatsApp",
  whatsappMessage: "Olá Pri! Conheci seu trabalho pelo site e gostaria de conversar sobre os treinos de corrida."
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-0",
    question: "Qual a diferença entre os planos Com e Sem Assessoria?",
    answer: "O plano 'Com Assessoria' oferece acompanhamento individualizado por 10 semanas, com ajustes semanais na sua planilha, feedback direto após os treinos e suporte VIP pelo WhatsApp para tirar todas as dúvidas. O plano 'Sem Assessoria' fornece a mesma metodologia em uma planilha estruturada para você treinar de forma autônoma, ideal para quem já tem mais disciplina e prefere seguir no próprio ritmo."
  },
  {
    id: "faq-1",
    question: "Nunca corri na vida, o programa serve para mim?",
    answer: "Com certeza! O programa 'Do zero aos cinco km' foi desenhado especificamente para mulheres que nunca correram ou que estão há anos sem praticar atividades físicas. Nosso método intercala caminhada e corrida leve progressiva, garantindo adaptação segura para suas articulações e seu fôlego."
  },
  {
    id: "faq-2",
    question: "Como funciona o formato 100% online?",
    answer: "Tudo é feito através de um aplicativo de treinos simples e intuitivo. Você acessa o seu planejamento semanal (com ou sem os ajustes da assessoria) que conta com vídeos explicativos dos exercícios educativos, e pode marcar seus treinos como concluídos pelo celular ou relógio GPS."
  },
  {
    id: "faq-3",
    question: "Sou mãe e tenho pouco tempo, como encaixar os treinos?",
    answer: "Entendemos perfeitamente a rotina desafiadora da maternidade. Por isso, nossos treinos duram de 30 a 45 minutos e podem ser realizados em 3 dias da semana. A corrida deve trazer leveza, e não ser mais uma obrigação pesada no seu dia."
  },
  {
    id: "faq-4",
    question: "Preciso de equipamentos caros ou academia para começar?",
    answer: "Não! Para dar os primeiros passos você só precisa de um tênis confortável e roupas de treino leves. Os exercícios de fortalecimento e educativo podem ser feitos na sua própria casa ou na praça."
  },
  {
    id: "faq-5",
    question: "Qual o prazo para começar após a inscrição?",
    answer: "Após a confirmação do seu pagamento, você recebe imediatamente o acesso. Caso opte pela Assessoria, realizamos uma anamnese inicial e em até 48 horas sua planilha 100% personalizada é liberada no aplicativo."
  }
];

export const TESTIMONIALS_DATA = [
  "https://lh3.googleusercontent.com/d/1-0dcqsSjP4vKNWmy9gsJIQyLkMn-e8j4",
  "https://lh3.googleusercontent.com/d/1E4Efp-jMEkVgfYafk20WV8i7UUkdvdNw",
  "https://lh3.googleusercontent.com/d/1LQlAWujA-77nTD3j9lLwUzSpTXa5APjZ",
  "https://lh3.googleusercontent.com/d/1OLRohYCy0gf5dVkwOTWo0Nq6uuJj6TfV",
  "https://lh3.googleusercontent.com/d/1j2KZWtbJi1TnzwtOtlaX4lP8ma5q_caa",
  "https://lh3.googleusercontent.com/d/1kzoxrnvuiq0TIPkMEv4ozsTZ40ic5_Bj",
  "https://lh3.googleusercontent.com/d/1l56IS2KUUPI-fpRghvvv_vNtZr2SYbNy"
];
