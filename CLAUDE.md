# zh3site — Instruções do Projeto

## Contexto
Site institucional + landing page da Rubix (ecossistema ZH3/Brasiliana). Design pixel-perfect a partir do Figma. Conteúdo estático — sem CMS (decisão definitiva por ora).

**Status atual (2026-03-24):** Site completo, assets migrados para `public/figma/`, SEO implementado, **em produção** na VPS `72.60.246.175` via EasyPanel. Formulário de contato com layout pronto — integração de envio pendente.

## Stack
- **Framework:** Next.js 16.2.1 (App Router) — requer Node.js >= 20
- **Estilo:** Tailwind CSS v4 (CSS-first, tokens via `@theme` em `globals.css`)
- **Animações:** Framer Motion ^12
- **Scroll suave:** Lenis (`SmoothScrollProvider`)
- **Conteúdo:** JSON local em `src/content/home.json` (sem CMS)
- **Tipografia:** Plus Jakarta Sans + Inter + Manrope (Google Fonts)
- **Deploy:** EasyPanel na VPS `72.60.246.175`, GitHub `willyobardo/rubixsite`

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

### Assets
- **Todos os assets do Figma estão em `public/figma/`** — nunca usar URLs `localhost:3845` no código
- Para novos assets: `curl http://localhost:3845/assets/<hash>.ext -o public/figma/<hash>.ext`
- Referenciar sempre como `/figma/<hash>.ext`

### Conteúdo
- Todo texto, dado e asset editável deve vir de `/content` (JSON), nunca hardcoded no componente
- Funções de fetch ficam em `/lib/content.ts`

### Componentes
- Componentes em `/components`, organizados por seção (`/components/home`, `/components/ui`, etc.)
- Componentes são **presentacionais**: recebem props, não fazem fetch direto
- Pages e layouts fazem o fetch e passam dados pros componentes

### Estilo
- Tailwind para layout e utilitários
- Tokens de cor em `src/app/globals.css` via `@theme`
- Nenhum CSS inline exceto valores dinâmicos do Framer Motion
- Mobile-first. Padding lateral padrão: `px-5 sm:px-8 lg:px-[76px]`
- Fontes fluidas: `clamp(min, vw, max)`

### Componentes UI Reutilizáveis
- `InnerPageHero` — hero para páginas internas, ilustração opcional, círculo amarelo. Props: `title`, `subtitle`, `cta`, `illustrationSrc`, `illustrationWidth`, `illustrationHeight`, `circleLeft`, `circlePosition`, `mobileCirclePosition`
- `SplitSection` — seção dividida texto + foto. Props: `title`, `description`, `photoSrc`, `photoAlt`, `photoSide` (`left`|`right`), `mobilePhotoBottom`, `cta`, `bg`
- `AnimateInView` — wrapper de animação na viewport. Props: `variant`, `delay`, `duration`, `className`, `amount`
- `StaggerContainer` + `StaggerItem` — animações em cascata
- `WhatsAppButton` — botão flutuante fixo canto inferior direito. Sem número ainda — substituir `href="#"` por `href="https://wa.me/55XXXXXXXXXXX"`

### Seções dark full-width
```tsx
<section style={{ background: '...' }}>
  <div className="w-full px-5 sm:px-8 lg:px-[76px]">...</div>
</section>
```

### Qualidade
- TypeScript estrito (`strict: true`)
- Imagens via `next/image` (nunca `<img>` direto)
- Links internos via `next/link`

## SEO — Já Implementado
- `metadataBase`: `https://rubixdigital.com.br`
- Metadata (título, description, canonical, OG) em todas as 9 páginas
- Template: `%s | Rubix`
- `src/app/robots.ts` → `/robots.txt`
- `src/app/sitemap.ts` → `/sitemap.xml`
- JSON-LD `Organization` em `layout.tsx`
- Favicons: `src/app/icon.png` + `src/app/apple-icon.png`

## Design
- **File Key Figma:** `28H8DHQWhNUmSVyRHqqWRe`
- **MCP Figma Desktop:** `http://localhost:3845` (porta local, precisa Figma Desktop aberto)
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
├── .nvmrc                                  # Node.js 20
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx                      # metadataBase, OG padrão, JSON-LD, WhatsAppButton
│   │   ├── icon.png                        # favicon 512×512
│   │   ├── apple-icon.png                  # apple touch icon 180×180
│   │   ├── robots.ts                       # gera /robots.txt
│   │   ├── sitemap.ts                      # gera /sitemap.xml
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
│   │   ├── home/
│   │   ├── plataforma/
│   │   ├── aplicacoes/
│   │   ├── contato/
│   │   │   └── ContatoHero.tsx             # Hero com formulário (client component)
│   │   ├── providers/
│   │   │   └── SmoothScrollProvider.tsx
│   │   └── ui/
│   │       ├── AnimateInView.tsx
│   │       ├── InnerPageHero.tsx
│   │       ├── SplitSection.tsx
│   │       ├── Preloader.tsx
│   │       └── WhatsAppButton.tsx          # Botão flutuante WhatsApp
│   ├── content/
│   │   └── home.json
│   ├── lib/
│   │   └── content.ts
│   └── types/
│       └── home.ts
├── public/
│   ├── figma/                              # 41 assets exportados do Figma
│   ├── images/
│   │   └── rubix-logo.png                  # Logo original para referência
│   └── icons/
│       └── instagram.svg
└── docs/
    └── architecture.md
```

## Deploy

**Fluxo:**
1. Alterar código localmente
2. `npm run build` para verificar localmente
3. `git add -A && git commit -m "..."`
4. `git push origin main`
5. EasyPanel → Reimplantar

**EasyPanel config:**
- Builder: Nixpacks
- Env: `NODE_VERSION=20`, `NODE_ENV=production`
- Port: 3000

## Próximos Passos

1. **Integração formulário de contato** — Resend / Formspree / Server Action
2. **Número WhatsApp** — substituir `href="#"` em `WhatsAppButton.tsx`
3. **Domínio** — apontar domínio real para `72.60.246.175`, configurar no EasyPanel, atualizar URLs em `layout.tsx` e pages
4. **Analytics** — GA4 / Plausible / Vercel Analytics
5. **CMS visual** — avaliar WordPress ou Webflow em fase futura (não headless)
