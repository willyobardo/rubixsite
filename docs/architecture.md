# Arquitetura — zh3site (Rubix)

> Última atualização: 2026-03-24

## Visão Geral

Site institucional + landing page da **Rubix** (ecossistema ZH3/Brasiliana).
Design pixel-perfect extraído do Figma. Arquitetura em **duas fases**:

- **Fase 1 — Static (atual):** Conteúdo em JSON local. Deploy simples, zero custo de infra.
- **Fase 2 — CMS:** Conteúdo migrado para Sanity. Cliente edita via Studio sem tocar no código.

A camada de apresentação (componentes React) **nunca muda** entre as fases. Só a camada de dados é trocada.

---

## Stack Técnica

| Camada | Tecnologia | Versão | Justificativa |
|---|---|---|---|
| Framework | Next.js (App Router) | 15.x | SSG/SSR nativo, RSC, `next/font`, `next/image` |
| Estilo | Tailwind CSS | v4 (CSS-first) | Utilitário, `@theme` em `globals.css`, zero runtime |
| Animações | Framer Motion | ^12 | Declarativo, `useInView`, `useScroll`, `useTransform` |
| Scroll suave | Lenis | latest | Smooth scroll profissional, padrão de agências |
| Conteúdo (fase 1) | JSON local | — | Zero dependência externa |
| CMS (fase 2) | Sanity | — | Studio customizável, GROQ, integra com Next.js |
| Deploy | Vercel | — | Zero config, CDN global, preview deployments |
| Linguagem | TypeScript | strict | `strict: true`, sem `any` |

---

## Tipografia

Fontes carregadas via `next/font/google` no `layout.tsx`, expostas como variáveis CSS:

| Variável CSS | Fonte | Uso |
|---|---|---|
| `--font-manrope` | Manrope | Nav, textos gerais do `body` |
| `--font-plus-jakarta` | Plus Jakarta Sans | Títulos (`h1`–`h2`), destaques |
| `--font-inter` | Inter | Parágrafos de corpo, botões, labels de formulário |

---

## Design Tokens (Tailwind v4)

Definidos em `src/app/globals.css` via `@theme`:

```css
@theme {
  --color-brand-navy:  #002f43;   /* fundo dark, textos principais */
  --color-brand-yellow: #fccc00;  /* CTAs, destaques, botões */
  --color-brand-blue:  #2878b7;   /* LinkedIn, acentos */
  --color-brand-gray:  #67768e;   /* textos secundários */
  --color-brand-light: #eeedf0;   /* fundos de seção claros */
}
```

**Referência Figma:** File Key `28H8DHQWhNUmSVyRHqqWRe`
Largura de referência desktop: **1280px** | Padding lateral: **76–80px**

---

## Páginas e Rotas

| Rota | Page | Status | Notas |
|---|---|---|---|
| `/` | `app/page.tsx` | ✅ Implementada | Homepage completa com todas as seções |
| `/o-que-e` | `app/o-que-e/page.tsx` | ✅ Implementada | Hero + SplitSections |
| `/plataforma` | `app/plataforma/page.tsx` | ✅ Implementada | Device Tracker — hero + SplitSections + dark section |
| `/aplicacoes` | `app/aplicacoes/page.tsx` | ✅ Implementada | Aplicações — hero + SplitSections + capabilities grid |
| `/contato` | `app/contato/page.tsx` | ✅ Layout pronto | Formulário no hero — **envio pendente** |
| `/lgpd` | `app/lgpd/page.tsx` | ✅ Implementada | Conteúdo legal exato do Figma |
| `/politica-de-privacidade` | `app/politica-de-privacidade/page.tsx` | ✅ Implementada | Hero + conteúdo legal |
| `/termos-de-uso` | `app/termos-de-uso/page.tsx` | ✅ Implementada | Hero com ilustração + conteúdo legal |
| `/politica-de-cookies` | `app/politica-de-cookies/page.tsx` | ✅ Implementada | Tipos de cookies + conteúdo |

---

## Estrutura de Pastas

```
zh3site/
├── src/
│   ├── app/
│   │   ├── globals.css                      # Tokens Tailwind v4 (@theme), reset
│   │   ├── layout.tsx                       # Root layout — fontes, Preloader, SmoothScrollProvider
│   │   ├── page.tsx                         # Homepage — Server Component
│   │   ├── o-que-e/page.tsx
│   │   ├── plataforma/page.tsx
│   │   ├── aplicacoes/page.tsx
│   │   ├── contato/page.tsx
│   │   ├── lgpd/page.tsx
│   │   ├── politica-de-privacidade/page.tsx
│   │   ├── termos-de-uso/page.tsx
│   │   └── politica-de-cookies/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                   # Nav fixa, menu mobile animado, CTA → /contato
│   │   │   └── Footer.tsx                   # Rodapé amarelo, pill "Fale conosco" → /contato
│   │   │
│   │   ├── home/                            # Seções da homepage (uma por arquivo)
│   │   │   ├── Hero.tsx
│   │   │   ├── TradingDesk.tsx
│   │   │   ├── Territory.tsx
│   │   │   ├── Highlights.tsx
│   │   │   ├── Efficiency.tsx
│   │   │   ├── Processes.tsx
│   │   │   ├── CtaBanner.tsx
│   │   │   └── AboutRubix.tsx
│   │   │
│   │   ├── plataforma/
│   │   │   └── PlataformaHero.tsx           # Hero parallax da página Plataforma
│   │   │
│   │   ├── aplicacoes/
│   │   │   └── AplicacoesHero.tsx           # Hero da página Aplicações
│   │   │
│   │   ├── contato/
│   │   │   └── ContatoHero.tsx              # Hero com formulário completo (client)
│   │   │                                    # Campos: nome, empresa, cargo, e-mail,
│   │   │                                    # telefone (máscara BR), objetivos, mensagem
│   │   │                                    # Checkbox LGPD customizado (border-radius 10px)
│   │   │
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx     # Lenis — smooth scroll global
│   │   │
│   │   └── ui/
│   │       ├── AnimateInView.tsx            # Wrappers de animação reutilizáveis
│   │       ├── InnerPageHero.tsx            # Hero para páginas internas
│   │       ├── SplitSection.tsx             # Layout split texto + foto
│   │       └── Preloader.tsx                # Overlay de carregamento
│   │
│   ├── content/
│   │   └── home.json                        # Conteúdo editável da homepage
│   │
│   ├── lib/
│   │   └── content.ts                       # getHomeData() — ÚNICA função que muda na Fase 2
│   │
│   └── types/
│       └── home.ts                          # Tipos TypeScript dos dados
│
├── public/
│   ├── images/
│   │   └── hero-laptop.png
│   └── icons/
│       └── instagram.svg
│
└── docs/
    └── architecture.md                      # Este arquivo
```

---

## Componentes UI Reutilizáveis

### `InnerPageHero` (`src/components/ui/InnerPageHero.tsx`)

Hero padrão para páginas internas (hero escuro com gradiente navy → black, bordas arredondadas inferior).

```tsx
<InnerPageHero
  title="Título da Página"
  subtitle="Subtítulo descritivo."
  cta={{ label: 'CTA', href: '/contato' }}
  gradient="linear-gradient(...)"           // opcional
  illustrationSrc="http://..."              // opcional — ativa layout 2 colunas
  illustrationAlt="Alt text"
  illustrationWidth={480}
  illustrationHeight={480}
  circleLeft={false}                        // posição do círculo amarelo
  circlePosition={{ left: '...', top: '...' }}       // desktop custom
  mobileCirclePosition={{ left: '...', top: '...' }} // mobile custom
/>
```

Sem `illustrationSrc`: layout coluna única centralizado à esquerda.
Com `illustrationSrc`: desktop 2 colunas (texto esq + ilustração dir), mobile coluna única.

### `SplitSection` (`src/components/ui/SplitSection.tsx`)

Seção dividida 50/50 com imagem ocupando metade da largura total (sem padding).

```tsx
<SplitSection
  title="Título"
  description={<p>Descrição com JSX.</p>}
  photoSrc="http://..."
  photoAlt="Alt"
  photoSide="right"           // 'left' | 'right'
  mobilePhotoBottom={false}   // inverte ordem no mobile
  cta={{ label: 'CTA', href: '/' }}
  bg="bg-brand-light"         // classe Tailwind para o fundo
/>
```

**Alturas:** `min-h-[280px]` mobile / `min-h-[480px]` desktop.
**Bordas arredondadas:** `lg:rounded-tl-[50px] lg:rounded-bl-[50px]` (foto direita) ou `lg:rounded-tr-[50px] lg:rounded-br-[50px]` (foto esquerda).

### `ContatoHero` (`src/components/contato/ContatoHero.tsx`)

Hero especial da página de contato — formulário embutido no hero escuro.

- Layout desktop: 2 colunas (esq: título + descrição + ilustração | dir: formulário)
- Campos obrigatórios: Nome completo, Empresa, Cargo, E-mail corporativo, Telefone
- Campos opcionais: Objetivos da campanha, Mensagem
- Máscara de telefone BR: `(XX) XXXXX-XXXX` / `(XX) XXXX-XXXX`
- Checkbox de consentimento customizado: `w-6 h-6`, `border-radius: 10px`, amarelo ao marcar
- **Envio: pendente de integração** (Resend / Formspree / Server Action)

---

## Sistema de Animações

### Providers e Utilitários

```
src/app/layout.tsx
  └── <Preloader />              # Aparece 2s ao carregar, fade-out suave
  └── <SmoothScrollProvider>     # Lenis ativo em toda a aplicação
        └── {children}
```

### `AnimateInView` — variantes disponíveis

`fadeUp` (padrão) · `fadeDown` · `fadeLeft` · `fadeRight` · `fade` · `scaleUp`

Comportamento bidirecional: `once: false` — anima ao entrar E reverte ao sair da viewport.

### Parallax (InnerPageHero, ContatoHero, PlataformaHero)

```tsx
const bgY   = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])  // fundo
const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])  // texto
const illustY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']) // ilustração
```

### Float infinito (círculo amarelo + ilustração)

- Ilustração: `y: [0, -12, 0]`, 3.5s, easeInOut, repeat Infinity
- Círculo amarelo: `y: [0, 14, 0]`, 4s — direção oposta

---

## Seções Dark Full-Width

Seções com fundo escuro e largura total (ex: "Milhões de dispositivos") **não usam `max-w`**:

```tsx
<section style={{ background: '#...' }}>
  <div className="w-full px-5 sm:px-8 lg:px-[76px]">
    {/* conteúdo */}
  </div>
</section>
```

---

## Camada de Dados

### Fase 1 — JSON Local (atual)

```ts
// src/lib/content.ts
import homeData from '@/content/home.json'

export async function getHomeData(): Promise<HomeData> {
  return homeData
}
```

### Fase 2 — Sanity (migração futura)

A **assinatura da função não muda**. Só a implementação interna:

```ts
export async function getHomeData(): Promise<HomeData> {
  return sanityClient.fetch(`*[_type == "homePage"][0]`)
}
```

---

## Responsividade

| Prefixo | Largura |
|---|---|
| (base) | 0px+ |
| `sm:` | 640px+ |
| `md:` | 768px+ |
| `lg:` | 1024px+ |
| `xl:` | 1280px+ |

**Padding lateral:** `px-5 sm:px-8 lg:px-[76px]` em todos os containers.
**Fontes:** `clamp(min, vw, max)` para escala fluida.

---

## Server vs Client Components

```
app/*/page.tsx         → Server Component (faz fetch, zero JS no cliente)
  ├── Header.tsx       → 'use client' (menu mobile com estado)
  ├── ContatoHero.tsx  → 'use client' (form state, máscara telefone, Framer Motion)
  ├── PlataformaHero.tsx → 'use client' (Framer Motion, useScroll)
  ├── AplicacoesHero.tsx → 'use client' (Framer Motion)
  ├── InnerPageHero.tsx  → 'use client' (Framer Motion, useScroll)
  ├── SplitSection.tsx   → 'use client' (Framer Motion)
  ├── AnimateInView.tsx  → 'use client' (Framer Motion useInView)
  └── Footer.tsx         → Server Component (estático)
```

---

## Assets Figma (Desenvolvimento)

Assets servidos via Figma Desktop MCP em `http://localhost:3845/assets/`.

**⚠️ Antes do deploy em produção**, todos os assets `localhost:3845/...` devem ser:
1. Exportados do Figma e salvos em `public/images/` ou `public/icons/`
2. URLs atualizadas nos componentes

Assets já migrados para `public/`:
- `hero-laptop.png` → ilustração do Hero
- `icons/instagram.svg` → ícone do rodapé

---

## Próximos Passos (Nova Fase)

| Tarefa | Prioridade | Status |
|---|---|---|
| Integração envio formulário de contato | 🔴 Alta | Pendente |
| Exportar assets `localhost:3845` → `public/` | 🔴 Alta | Pendente |
| Deploy Vercel + domínio + DNS | 🔴 Alta | Pendente |
| Analytics (Vercel Analytics / GA4 / Plausible) | 🟡 Média | A definir |
| Migração Sanity CMS (Fase 2) | 🟢 Baixa | Futuro |
| Blog (MDX ou Sanity) | 🟢 Baixa | Futuro |

---

## Deploy

### Vercel (recomendado)

- Conecta direto ao repositório Git
- Preview deployments automáticos em cada PR/branch
- CDN global, zero configuração com Next.js

### Variáveis de ambiente

**Fase 1 (atual):** nenhuma variável necessária.

**Com Resend (formulário):**
```env
RESEND_API_KEY=re_...
CONTACT_EMAIL=contato@rubix.digital
```

**Fase 2 (com Sanity):**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

---

## CMS — Fase 2 (Sanity)

### Schemas planejados

```
homePage        → seções e textos da homepage
siteSettings    → logo, redes sociais, footer
post            → posts do blog
author          → autores dos posts
```

### Fluxo de migração

1. Criar projeto em sanity.io
2. Definir schemas espelhando os tipos TypeScript em `src/types/`
3. Popular conteúdo no Studio a partir dos JSONs atuais
4. Trocar implementação das funções em `src/lib/content.ts`
5. Adicionar ISR no blog (`revalidate: 3600`)
6. Deploy do Sanity Studio
