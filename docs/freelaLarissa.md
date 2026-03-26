# Freela Larissa — Integração Meta + Make + Airtable

## Contexto

Fluxo onde leads entram pelo Meta, passam por automação no Make e são enviados para Airtable.
Objetivo: devolver a qualificação desses leads ao Meta para otimização de campanhas.

---

## O que o Meta aceita de volta

| Objetivo | Mecanismo Meta |
|---|---|
| Otimizar campanhas pelo algoritmo | **Conversions API (CAPI)** — envia eventos de qualidade |
| Criar públicos segmentados | **Custom Audiences** — lista de emails/phones qualificados |

---

## Os 3 caminhos possíveis

### 1. Make watching Airtable → Meta CAPI *(recomendado)*

```
Airtable (lead qualificado) → Make (trigger) → Meta Conversions API
```

- Make tem trigger "Watch Records" no Airtable — quando campo `status` muda para "Qualificado", dispara
- No Make: módulo HTTP ou módulo nativo do Meta Conversions API
- Envia: `event_name: "Lead"` + dados hashed do usuário + `lead_id` original do Meta
- Vantagem: simples, visual, sem código

### 2. Airtable Automation → Webhook → Make → Meta CAPI

```
Airtable (trigger nativo) → Webhook → Make → Meta CAPI
```

- Automação nativa do Airtable dispara quando campo muda, envia para webhook do Make
- Útil se quiser lógica condicional no Airtable antes de acionar o Make

### 3. Airtable Automation → Meta CAPI direto (sem Make)

```
Airtable (Run a script) → Meta CAPI
```

- Airtable "Run a Script" faz um `fetch()` direto para a CAPI do Meta
- Desvantagem: sem retry, sem logs visuais, manutenção mais difícil

---

## Payload que o Meta precisa receber (CAPI)

```json
{
  "event_name": "Lead",
  "event_time": 1711234567,
  "user_data": {
    "em": ["<email sha256 hashed>"],
    "ph": ["<phone sha256 hashed>"],
    "lead_id": "<id do lead do Meta>"
  },
  "custom_data": {
    "lead_quality": "high"
  }
}
```

> O `lead_id` é a chave para matching — vem junto quando o lead entra pelo Meta Lead Ads.

---

## O que precisa do lado do Airtable (para a solução 1)

### 1. Personal Access Token (PAT)

- Airtable → avatar → **Developer Hub → Personal access tokens → Create token**
- Escopos necessários:
  - `data.records:read`
  - `schema.bases:read`
- Vincular ao workspace ou base específica

### 2. Base ID

- Pegar da URL da base: `airtable.com/appXXXXXXXXXXXXXX/...`
- O `appXXXXXXXXXXXXXX` é o Base ID

### 3. Table ID / nome da tabela

- Qual tabela o Make vai monitorar

### Setup no Make

1. Módulo **Airtable → Watch Records**
2. Conectar com o PAT
3. Selecionar Base → Tabela
4. Filtro: só disparar quando `status = "Qualificado"` (via `filterByFormula`)

> Não usar API Key legada — o Airtable descontinuou. O PAT é o substituto.

---

## Próximos passos

- [ ] Montar `filterByFormula` correto no módulo do Make
- [ ] Configurar módulo Meta Conversions API no Make
- [ ] Testar com lead real e verificar matching no Meta Events Manager
