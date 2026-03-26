// tina/config.ts
import { defineConfig, AbstractAuthProvider } from "tinacms";
var NextAuthProvider = class extends AbstractAuthProvider {
  async authenticate() {
    window.location.href = "/api/auth/signin";
    return { access_token: "", id_token: "", refresh_token: "" };
  }
  async getToken() {
    try {
      const res = await fetch("/api/auth/session");
      const session = await res.json();
      if (!session?.user) return { id_token: null };
      return { id_token: session.user.email || session.user.name || "authenticated" };
    } catch {
      return { id_token: null };
    }
  }
  async getUser() {
    try {
      const res = await fetch("/api/auth/session");
      const session = await res.json();
      return session?.user || null;
    } catch {
      return null;
    }
  }
  async logout() {
    try {
      const csrfRes = await fetch("/api/auth/csrf");
      const { csrfToken } = await csrfRes.json();
      await fetch("/api/auth/signout", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `csrfToken=${csrfToken}&callbackUrl=/`
      });
    } finally {
      window.location.href = "/";
    }
  }
};
var config_default = defineConfig({
  authProvider: new NextAuthProvider(),
  // Self-hosted: aponta para o próprio backend Next.js
  contentApiUrlOverride: "/api/tina/gql",
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
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
