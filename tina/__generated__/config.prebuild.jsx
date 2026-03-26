// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  // Self-hosted: aponta para o próprio backend Next.js
  contentApiUrlOverride: "/api/tina/gql",
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_PUBLIC_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "figma",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      // ─── Homepage ────────────────────────────────────────────────
      {
        name: "home",
        label: "P\xE1gina Inicial",
        path: "src/content",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          filename: { readonly: true, slugify: () => "home" }
        },
        match: { include: "home" },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero \u2014 Banner Principal",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "tradingDesk",
            label: "Trading Desk",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "features", label: "Funcionalidades", list: true }
            ]
          },
          {
            type: "object",
            name: "territory",
            label: "Territ\xF3rio",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "pillars", label: "Pilares", list: true }
            ]
          },
          {
            type: "object",
            name: "highlights",
            label: "N\xFAmeros em Destaque",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              {
                type: "object",
                name: "items",
                label: "Itens",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.value ?? "Item" }) },
                fields: [
                  { type: "string", name: "value", label: "Valor (ex: + 27%)" },
                  { type: "string", name: "description", label: "Descri\xE7\xE3o" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "efficiency",
            label: "Efici\xEAncia de M\xEDdia",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Texto do Bot\xE3o" }
            ]
          },
          {
            type: "object",
            name: "processes",
            label: "Nossos Processos",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              {
                type: "object",
                name: "items",
                label: "Processos",
                list: true,
                ui: { itemProps: (item) => ({ label: item?.title ?? "Processo" }) },
                fields: [
                  { type: "string", name: "icon", label: "\xCDcone (heart | thumbsup | lifebuoy)" },
                  { type: "string", name: "title", label: "T\xEDtulo" },
                  { type: "string", name: "description", label: "Descri\xE7\xE3o", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "ctaBanner",
            label: "Banner CTA",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo" },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Texto do Bot\xE3o" }
            ]
          },
          {
            type: "object",
            name: "aboutRubix",
            label: "Sobre a Rubix",
            fields: [
              { type: "string", name: "title", label: "T\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "subtitle", label: "Subt\xEDtulo", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Texto do Bot\xE3o" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Rodap\xE9",
            fields: [
              {
                type: "object",
                name: "address",
                label: "Contato",
                fields: [
                  { type: "string", name: "cities", label: "Cidades" },
                  { type: "string", name: "phone", label: "Telefone" },
                  { type: "string", name: "email", label: "E-mail" }
                ]
              },
              { type: "string", name: "copyright", label: "Copyright", ui: { component: "textarea" } },
              { type: "string", name: "ctaLabel", label: "Texto do Bot\xE3o" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
