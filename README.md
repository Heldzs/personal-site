# 👨‍💻 Helder Junior | Desenvolvedor Frontend

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

> Portfólio pessoal de alta performance focado em arquitetura moderna, animações fluidas (60fps) e excelente Experiência do Usuário (UX).

🔗 **[Visualizar Projeto Online](https://helderjuniordev.netlify.app/)**

---

## 🚀 Principais Funcionalidades e Destaques Técnicos

Este portfólio não é apenas uma vitrine visual, mas também uma demonstração prática de conceitos avançados de Frontend:

- **Motor de Scroll Suave Customizado:** Implementação de `requestAnimationFrame` com cálculos de física (Easing) para uma navegação entre âncoras cinematográfica.
- **Prevenção de CLS (Cumulative Layout Shift):** Bloqueio de scroll durante a abertura de modais com cálculo matemático dinâmico da largura da barra de rolagem.
- **Animações Delegadas à GPU:** Uso intensivo de `transform` e `opacity` via Framer Motion e Tailwind para garantir animações cravadas em 60fps sem sobrecarregar a Thread principal (CPU).
- **Formulário Serverless:** Integração com Formsubmit utilizando Axios e React Hook Form, abolindo a necessidade de um backend próprio para envio de emails.
- **Clean Architecture (Separação de Preocupações):** Lógica de negócios e chamadas de API isoladas em `Hooks` e `Services`, mantendo os componentes visuais limpos e "burros".

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript (Tipagem rigorosa)
- **Estilização:** Tailwind CSS (Utilitários)
- **Animações:** Framer Motion (Física de mola e transições de layout)
- **Gerenciamento de Formulário:** React Hook Form
- **Requisições HTTP:** Axios
- **Ícones:** React-icons e componentização em SVG Nativo

---

## 📂 Estrutura de Pastas e Arquitetura

O projeto adota uma estrutura modular e escalável, baseada nas melhores práticas do Next.js:

```text
src/
├── app/                  # Next.js App Router (Páginas e Layout global)
├── components/           # Componentes visuais do projeto
│   ├── layout/           # Componentes de estrutura fixa (Navbar, Footer)
│   ├── motion/           # Animações customizadas e Framer Motion
│   ├── sections/         # Seções principais da página (Hero, About, etc)
├── data/                 # Arquivos de dados estáticos (ex: lista de projetos)
├── hooks/                # Custom hooks (Regras de negócio e estados globais)
├── lib/                  # Utilitários e configurações de bibliotecas externas
├── providers/            # Context Providers (Tema, etc)
├── services/             # Comunicação com APIs externas (ex: Axios/Formsubmit)
└── types/                # Definições de tipagem do TypeScript
```
