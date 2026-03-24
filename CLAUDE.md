# zh3site — Instruções do Projeto

## Contexto
Site institucional + landing page da Rubix (ecossistema ZH3/Brasiliana). Design pixel-perfect a partir do Figma. Arquitetura preparada para migração a CMS.

**Status atual (2026-03-24):** Todas as páginas do site implementadas e funcionando. Formulário de contato com layout completo — integração de envio pendente.

## Stack
- **Framework:** Next.js 15 (App Router)
- **Estilo:** Tailwind CSS v4 (CSS-first, tokens via `@theme` em `globals.css`)
- **Animações:** Framer Motion ^12
- **Scroll suave:** Lenis (`SmoothScrollProvider`)
- **Conteúdo (fase 1):** JSON/MDX local em `/content`
- **Conteúdo (fase 2):** Sanity CMS (migração futura)
- **Tipografia:** Plus Jakarta Sans + Inter + Manrope (Google Fonts)
- **Deploy:** Vercel (recomendado)

## Páginas Implementadas

| Rota | Arquivo | Status |
|---|---|---|
| `/` | `app/page.tsx` | ✅ |
| `/o-que-e` | `app/o-que-e/page.tsx` | ✅ |
| `/plataforma` | `app/plataforma/page.tsx` | ✅ |
| `/aplicacoes` | `app/aplicacoes/page.tsx` | ✅ |
| `/contato` | `app/contato/page.tsx` | ✅ (layout pronto, envio pendente) |
| `/lgpd` | `app/lgpd/page.tsx` | ✅ |
| `/politica-de-privacidade` | `app/politica-de-privacidade/page.tsx` | ✅ |
| `/termos-de-uso` | `app/termos-de-uso/page.tsx` | ✅ |
| `/politica-de-cookies` | `app/politica-de-cookies/page.tsx` | ✅ |

## Regras de Desenvolvimento

### Conteúdo
- Todo texto, dado e asset editável deve vir de `/content` (JSON ou MDX), nunca hardcoded no componente.
- Funções de fetch ficam em `/lib/content.ts`. A assinatura dessas funções não muda quando migrar pro Sanity — só a implementação interna.
- Nomes de campos nos JSONs devem espelhar o schema que o Sanity usaria.

### Componentes
- Componentes em `/components`, organizados por seção (`/components/home`, `/components/ui`, `/components/contato`, etc.)
- Componentes são **presentacionais**: recebem props, não fazem fetch direto.
- Pages e layouts fazem o fetch e passam dados pros componentes.

### Estilo
- Tailwind para layout e utilitários.
- Tokens de cor em `src/app/globals.css` via `@theme`.
- Nenhum CSS inline exceto valores dinâmicos do Framer Motion.
- Mobile-first. Padding lateral padrão: `px-5 sm:px-8 lg:px-[76px]`.
- Fontes fluidas: `clamp(min, vw, max)`.

### Componentes UI Reutilizáveis
- `InnerPageHero` — hero para páginas internas, suporta ilustração opcional com animação float + círculo amarelo. Props: `title`, `subtitle`, `cta`, `gradient`, `illustrationSrc`, `illustrationWidth`, `illustrationHeight`, `circleLeft`, `circlePosition`, `mobileCirclePosition`.
- `SplitSection` — seção dividida texto + foto. Props: `title`, `description`, `photoSrc`, `photoAlt`, `photoSide` (`left`|`right`), `mobilePhotoBottom`, `cta`, `bg`. Imagem: `min-h-[280px] lg:min-h-[480px]`.
- `AnimateInView` — wrapper de animação na viewport. Props: `variant`, `delay`, `duration`, `className`, `amount`.
- `StaggerContainer` + `StaggerItem` — animações em cascata para listas/grids.

### Animações
- Framer Motion apenas para animações de entrada e interações que agregam valor.
- Usar `AnimatePresence` e `motion.*` nos componentes client-side.
- Componentes com animação levam o directive `"use client"`.

### Qualidade
- TypeScript estrito (`strict: true`).
- Sem `any`. Tipos definidos em `/types`.
- Imagens via `next/image` (nunca `<img>` direto).
- Links internos via `next/link`.

### Seções dark full-width
Seções com fundo escuro e largura total NÃO usam `max-w` container:
```tsx
<section style={{ background: '...' }}>
  <div className="w-full px-5 sm:px-8 lg:px-[76px]">...</div>
</section>
```

## Design
- **File Key Figma:** `28H8DHQWhNUmSVyRHqqWRe`
- **MCP Figma Desktop:** `http://localhost:3845` (porta local, precisa Figma Desktop aberto)
- **Assets Figma:** `http://localhost:3845/assets/<hash>.(png|svg)` — temporários, exportar antes do deploy
- **Largura de referência (desktop):** 1280px
- **Paleta:**
  - Navy: `#002f43`
  - Amarelo: `#fccc00`
  - Azul médio: `#2878b7`
  - Cinza: `#67768e`
  - Cinza claro: `#eeedf0`
- **Fontes:** Plus Jakarta Sans (títulos), Inter (corpo/botões), Manrope (nav)

## Estrutura de Pastas
```
zh3site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx                        # Homepage
│   │   ├── o-que-e/page.tsx
│   │   ├── plataforma/page.tsx
│   │   ├── aplicacoes/page.tsx
│   │   ├── contato/page.tsx
│   │   ├── lgpd/page.tsx
│   │   ├── politica-de-privacidade/page.tsx
│   │   ├── termos-de-uso/page.tsx
│   │   └── politica-de-cookies/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                  # "Fale com a Rubix" → /contato
│   │   │   └── Footer.tsx                  # "Fale conosco" → /contato
│   │   ├── home/                           # Seções da homepage
│   │   ├── plataforma/
│   │   │   └── PlataformaHero.tsx
│   │   ├── aplicacoes/
│   │   │   └── AplicacoesHero.tsx
│   │   ├── contato/
│   │   │   └── ContatoHero.tsx             # Hero com formulário (client component)
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx
│   │   └── ui/
│   │       ├── AnimateInView.tsx
│   │       ├── InnerPageHero.tsx
│   │       ├── SplitSection.tsx
│   │       └── Preloader.tsx
│   ├── content/
│   │   └── home.json
│   ├── lib/
│   │   └── content.ts
│   └── types/
│       └── home.ts
├── public/
│   ├── images/
│   └── icons/
└── docs/
    └── architecture.md
```

## Próximos Passos (Nova Fase)
1. **Integração do formulário de contato** — escolher entre Resend, Formspree ou Server Action + e-mail
2. **Exportar todos os assets** `localhost:3845/...` para `public/` antes do deploy
3. **Deploy** — configurar Vercel, domínio e DNS
4. **Analytics** — Vercel Analytics, Plausible ou GA4
5. **Sanity CMS** — Fase 2, migração do conteúdo

## CMS Migration Path
Ver `docs/architecture.md` para o roadmap completo de migração ao Sanity.
