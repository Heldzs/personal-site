export const projectsData = [
  {
    id: 1,
    title: "Portfólio Pessoal",
    description:
      "O portfólio que você está a explorar agora. Desenvolvido com foco obsessivo em performance, arquitetura moderna e micro-interações.",
    fullDescription:
      "Este projeto nasceu com o objetivo de ser mais do que um simples currículo digital; é uma demonstração prática das minhas competências em Frontend avançado. Construído sobre o ecossistema Next.js e TypeScript, o foco principal foi a criação de uma experiência de utilizador (UX) imersiva e de altíssima performance.\n\nPara garantir 60fps constantes, implementei técnicas como delegação de animações pesadas (letreiros infinitos) diretamente para a GPU via CSS puro. As micro-interações e modais foram construídos com Framer Motion, incluindo física de mola (spring) natural e cálculos dinâmicos para prevenir Cumulative Layout Shift (CLS) ao bloquear a barra de rolagem. O resultado é um layout híbrido, acessível e responsivo.",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://helderjuniordev.netlify.app/",
    githubUrl: "https://github.com/Heldzs/personal-site",
    gradient:
      "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
    icon: (
      <svg
        className="w-16 h-16 text-zinc-600 dark:text-zinc-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Campus Link",
    description:
      "Uma plataforma acadêmica baseada em Inteligência Artificial (RAG) que responde dúvidas de alunos com base em documentos oficiais.",
    fullDescription: `Sobre o Projeto

O Campus Link nasceu para resolver a dificuldade de acesso à informação dentro do ambiente universitário. Em vez de obrigar os alunos a procurarem regras de matrícula ou datas em dezenas de editais em PDF, a plataforma oferece um assistente virtual inteligente. Ele responde às perguntas cruzando dados dos documentos oficiais da instituição e, o mais importante: cita as fontes.

O Desafio e a Solução

Como desenvolvedor(a) Frontend do projeto, meu desafio foi criar uma ponte amigável entre o motor de Inteligência Artificial e o usuário final, garantindo uma usabilidade impecável tanto para os alunos quanto para a equipe administrativa.

Para os alunos, desenvolvi uma interface de chat fluida que suporta formatação em Markdown, respostas em streaming (tempo real) e um Visualizador de Documentos flutuante. Isso permite que o usuário leia a fonte oficial citada pela IA sem nunca perder o contexto da conversa.

Para a administração, construí um painel de controle robusto ("sala de comando") que garante a autonomia da instituição. A equipe pode gerenciar diferentes setores do campus e alimentar o "cérebro" da IA fazendo o upload de novos arquivos via Drag & Drop, com validação instantânea contra duplicatas.

Principais Destaques do Frontend:

UX/UI Avançada: Suporte a Light/Dark mode fluido e componentes de interface acessíveis.

Gestão de Estado Complexa: Uso de React Query para gerenciar o cache das conversas, histórico do chat e mutações de dados no painel admin.

Testes Automatizados: Implementação de testes unitários robustos com Jest e React Testing Library, garantindo a confiabilidade de modais complexos e fluxos de upload.

Roteamento e Permissões: Controle de acesso baseado em papéis (Role-Based Access Control), separando a experiência do estudante da visão do administrador.`,
    techs: [
      "React & Next.js",
      "Typescript",
      "Tailwind CSS",
      "shadcn/ui",
      "next-themes",
      "Lucide React",
      "React Query",
      "Sonner",
      "Jest",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/users/webacademyufam/projects/25",
    gradient:
      "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
    icon: (
      <svg
        className="w-16 h-16 text-emerald-500/50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];
