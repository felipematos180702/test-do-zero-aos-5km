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
  whatsappNumber: "5521987115636", // Editable default number
};

export const LINK_CARDS: LinkCard[] = [
  {
    id: "programa-5k",
    title: "Do zero aos cinco km (Com Assessoria)",
    description: "Você não precisa descobrir sozinha como chegar aos seus primeiros 5 km.\n\nDurante 10 semanas, além de seguir toda a metodologia do programa, você terá meu acompanhamento mais de perto, com um espaço exclusivo para trocar experiências, tirar dúvidas e receber orientações ao longo do processo.",
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
      "Acesso por 10 semanas ao programa na plataforma digital;",
      "10 semanas de acompanhamento comigo, para orientar sua evolução e ajudar nos ajustes necessários ao longo do caminho;",
      "Grupo fechado e exclusivo no WhatsApp, somente para mulheres, onde estarei presente para dúvidas, trocas e orientações;",
      "Treinos de corrida pensados para levar você, de forma progressiva, até os seus primeiros 5 km;",
      "Treinos gravados de fortalecimento para fazer em casa, sem necessidade de academia ou materiais específicos."
    ],
    purpose: "Mais do que receber um treino, você terá alguém acompanhando o seu processo até a linha dos 5 km."
  },
  {
    id: "planejamento",
    title: "Do zero aos cinco km (Sem Assessoria)",
    description: "Planilha e estrutura detalhada de treinos para quem deseja evoluir e treinar no seu próprio ritmo e de forma mais autônoma.",
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
      "Acesso por 10 semanas à plataforma digital e aos treinos;",
      "Treinos gravados de fortalecimento para fazer em casa, sem necessidade de academia ou de material específico."
    ],
    purpose: "Resgatar a saúde e a autoestima de mulheres de forma gentil, facilitada."
  }
];

export const ABOUT_DATA = {
  title: "Sobre Mim & O Time",
  image: "https://lh3.googleusercontent.com/d/19xvGZtcFwSmK8pPvojo-N_bdoCWLaJu5",
  cref: "CREF: 032128-G/RJ",
  paragraphs: [
    "Acredito que a corrida é um mecanismo poderoso de reconexão com nós mesmas. Em meio a tantas funções, responsabilidades e uma rotina que muitas vezes nos engole, é fácil deixarmos o nosso próprio cuidado para depois.",
    "Foi também vivendo essa realidade que nasceu o Time Pri Cardoso. Como mulher, mãe e alguém que concilia diferentes funções todos os dias, conheço muitos dos desafios das mulheres que chegam até mim, e acredito que a corrida pode ser um caminho possível para começarmos a mudar essa dinâmica.",
    "Além de correr, quero ajudar mulheres a resgatarem sua saúde, disposição, força e autoestima, através de uma corrida consciente, acolhedora e eficiente, que respeite a vida real e, ao mesmo tempo, gere evolução."
  ],
  whatsappCTA: "Fale Diretamente Comigo no WhatsApp",
  whatsappMessage: "Olá Pri! Conheci seu trabalho pelo site e gostaria de conversar sobre os treinos de corrida."
};

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-0",
    question: "Qual a diferença entre os planos Com e Sem Assessoria?",
    answer: "O plano Com Assessoria inclui todo o conteúdo do programa Do 0 aos 5 km + 10 semanas de acompanhamento em grupo comigo. Durante esse período, você fará parte de um grupo exclusivo no WhatsApp, onde poderá tirar dúvidas, compartilhar sua evolução e receber minhas orientações ao longo do programa. A assessoria é realizada em grupo e não inclui planilha ou acompanhamento individualizado.\n\nNo plano Sem Assessoria, você também terá acesso a todo o conteúdo e à metodologia do programa Do 0 aos 5 km, porém seguirá o programa de forma autônoma, sem o meu acompanhamento e sem acesso ao grupo de WhatsApp. \n\nEssa opção é ideal para quem prefere ter mais liberdade para organizar a própria rotina e seguir o programa no seu ritmo. Os 5 km continuam sendo o objetivo, o que muda é que, sem a assessoria, sua organização, constância e comprometimento pessoal terão um papel ainda mais importante ao longo dessas 10 semanas"
  },
  {
    id: "faq-1",
    question: "Nunca corri na vida, o programa serve para mim?",
    answer: "O programa Do Zero aos cinco km foi desenvolvido para mulheres que nunca correram, que já correram e estão há algum tempo paradas, que desejam usar a corrida como uma forma de inserir o exercício físico de maneira regular na rotina ou até mesmo para quem já corre 5 km e quer evoluir nessa distância.\n\nA proposta é que, ao longo de 8 a 10 semanas, você construa essa evolução de forma progressiva e segura, respeitando o seu momento e fazendo da corrida um hábito possível dentro da sua realidade.\n\nVocê não precisa estar pronta para começar. Precisa apenas começar e se comprometer com o processo.\n\nO programa te mostra o caminho; a sua constância é o que vai nos aproximar, semana após semana, dos seus 5 km."
  },
  {
    id: "faq-2",
    question: "Como funciona o formato do programa?",
    answer: "Todo o programa acontece de forma remota, através de uma plataforma de treinos simples e fácil de usar. Nela, você acessa o seu planejamento semanal e encontra vídeos explicativos com as orientações necessárias para entender e realizar cada etapa do programa.\n\nVocê pode acompanhar os treinos pelo celular e organizar a corrida dentro da sua própria rotina, onde estiver.\n\nPara quem escolhe o plano Com Assessoria, além de todo o conteúdo da plataforma, há 10 semanas de acompanhamento em grupo comigo, com espaço para troca de informações, orientações e dúvidas durante o processo.\n\nNo plano Sem Assessoria, você tem acesso à mesma metodologia e ao conteúdo do programa, mas realiza o processo de forma autônoma, seguindo as orientações disponíveis na plataforma."
  },
  {
    id: "faq-3",
    question: "Tenho uma rotina corrida. Como encaixar os treinos?",
    answer: "Sabemos que a rotina de uma mulher pode envolver muitas funções, responsabilidades e imprevistos, e a proposta não é que a sua vida precise se adaptar à corrida. É a corrida que precisa encontrar espaço na vida que você já tem.\n\nPor isso, o programa foi pensado para ser possível dentro de uma rotina real. A proposta é reservar, em média, 30 a 45 minutos, 3 vezes por semana, para os seus treinos.\n\nNão buscamos uma rotina perfeita, mas precisamos de constância e comprometimento com o processo para que a evolução aconteça. \n\nAlgumas semanas serão melhores que outras, e tudo bem. O importante é entregar o seu melhor dentro das possibilidades daquele momento e continuar.\n\nA corrida não precisa ser mais uma obrigação na sua lista. Ela pode ser justamente o espaço que você escolheu reservar para cuidar de si."
  },
  {
    id: "faq-4",
    question: "Posso fazer os treinos na esteira ou preciso correr na rua?",
    answer: "Você pode treinar na rua, na esteira se tiver acesso a academia, em uma praça ou onde for mais viável para a sua rotina.\n\nA proposta é justamente fazer a corrida caber na vida que você já tem, utilizando os espaços e recursos que estão disponíveis para você.\n\nE a corrida não vem sozinha. O programa também inclui treinos de fortalecimento gravados para serem feitos em casa, sem a necessidade de academia ou equipamentos específicos. Eles complementam o trabalho da corrida, ajudando na preparação do corpo, na melhora do desempenho e na redução do risco de lesões (sem necessidade de material específico)\n\nOu seja: não ter acesso a uma academia não precisa ser um impedimento para começar. Você terá uma estrutura que permite realizar tanto os treinos de corrida quanto o fortalecimento de forma compatível com a sua realidade."
  },
  {
    id: "faq-5",
    question: "Qual o prazo para começar após a inscrição?",
    answer: "Após a confirmação do pagamento, você recebe acesso imediato à plataforma e ao conteúdo do programa, para começar a sua jornada.\n\nCaso escolha o plano Com Assessoria, você também receberá o acesso ao grupo exclusivo da comunidade, onde estarei presente durante as 10 semanas para acompanhar o processo, orientar, trocar experiências e tirar dúvidas dentro da nossa dinâmica em grupo.\n\nEscolheu o plano, confirmou a inscrição? \n\nSeu primeiro passo já pode começar."
  }
];

export const TESTIMONIALS_DATA = [
  "https://lh3.googleusercontent.com/d/1kzoxrnvuiq0TIPkMEv4ozsTZ40ic5_Bj",
  "https://lh3.googleusercontent.com/d/1216g94uk0NSwcUnM7PmgNzoT16f5AQWf",
  "https://lh3.googleusercontent.com/d/1OUUzLkqRBLbHCx7w_qGpazSGR7KGwl8h",
  "https://lh3.googleusercontent.com/d/1UalRu1LoJeD_qQZaR30bqWqG4T2phNTL",
  "https://lh3.googleusercontent.com/d/1eILULfNkXgebev3xVY8NToLzCIfNIW2l",
  "https://lh3.googleusercontent.com/d/1Bmm2NTORhMIuNcnmHeAlrFqEFOXdm8dI",
  "https://lh3.googleusercontent.com/d/14gBRgMe8f5iXARjyZWO75LwlJSBwLcMk",
  "https://lh3.googleusercontent.com/d/1wCqag63DQiWF0En6KPCw1ijYOHQV5qD9",
  "https://lh3.googleusercontent.com/d/1HbiB5vxGwXutX7wnz1F4RW5DMA9j3F3g",
  "https://lh3.googleusercontent.com/d/1FELCrJk_BscQl-IC5ZXIvtmZRz6Vb6gx",
  "https://lh3.googleusercontent.com/d/1V4S8KRdrD9YN3lX5F9BtTmiKx-6uv8RL"
];
