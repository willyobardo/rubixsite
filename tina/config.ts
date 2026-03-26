import { defineConfig } from 'tinacms'

export default defineConfig({
  // Self-hosted: aponta para o próprio backend Next.js
  contentApiUrlOverride: '/api/tina/gql',
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || 'main',
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'figma',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      // ─── Homepage ────────────────────────────────────────────────
      {
        name: 'home',
        label: 'Página Inicial',
        path: 'src/content',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
          filename: { readonly: true, slugify: () => 'home' },
        },
        match: { include: 'home' },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero — Banner Principal',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
            ],
          },
          {
            type: 'object',
            name: 'tradingDesk',
            label: 'Trading Desk',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'features', label: 'Funcionalidades', list: true },
            ],
          },
          {
            type: 'object',
            name: 'territory',
            label: 'Território',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'pillars', label: 'Pilares', list: true },
            ],
          },
          {
            type: 'object',
            name: 'highlights',
            label: 'Números em Destaque',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              {
                type: 'object',
                name: 'items',
                label: 'Itens',
                list: true,
                ui: { itemProps: (item) => ({ label: item?.value ?? 'Item' }) },
                fields: [
                  { type: 'string', name: 'value', label: 'Valor (ex: + 27%)' },
                  { type: 'string', name: 'description', label: 'Descrição' },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'efficiency',
            label: 'Eficiência de Mídia',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Texto do Botão' },
            ],
          },
          {
            type: 'object',
            name: 'processes',
            label: 'Nossos Processos',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              {
                type: 'object',
                name: 'items',
                label: 'Processos',
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title ?? 'Processo' }) },
                fields: [
                  { type: 'string', name: 'icon', label: 'Ícone (heart | thumbsup | lifebuoy)' },
                  { type: 'string', name: 'title', label: 'Título' },
                  { type: 'string', name: 'description', label: 'Descrição', ui: { component: 'textarea' } },
                ],
              },
            ],
          },
          {
            type: 'object',
            name: 'ctaBanner',
            label: 'Banner CTA',
            fields: [
              { type: 'string', name: 'title', label: 'Título' },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Texto do Botão' },
            ],
          },
          {
            type: 'object',
            name: 'aboutRubix',
            label: 'Sobre a Rubix',
            fields: [
              { type: 'string', name: 'title', label: 'Título', ui: { component: 'textarea' } },
              { type: 'string', name: 'subtitle', label: 'Subtítulo', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Texto do Botão' },
            ],
          },
          {
            type: 'object',
            name: 'footer',
            label: 'Rodapé',
            fields: [
              {
                type: 'object',
                name: 'address',
                label: 'Contato',
                fields: [
                  { type: 'string', name: 'cities', label: 'Cidades' },
                  { type: 'string', name: 'phone', label: 'Telefone' },
                  { type: 'string', name: 'email', label: 'E-mail' },
                ],
              },
              { type: 'string', name: 'copyright', label: 'Copyright', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaLabel', label: 'Texto do Botão' },
            ],
          },
        ],
      },
    ],
  },
})
