# REVIFAR — Landing Page

Landing page mobile-first para a REVIFAR, serviço de revitalização de faróis em Caldas Novas – GO.

## Conteúdo confirmado utilizado

- Nome: REVIFAR
- Instagram: @revifar_cn.go
- Serviço: revitalização de faróis
- Local: Caldas Novas – GO
- Atendimento a domicílio
- Orçamento via WhatsApp
- WhatsApp exibido no material fornecido: +55 64 9286-7210

## Preço

Nenhum preço foi informado no material recebido. Por isso, o site mostra **"Sob orçamento"** em vez de inventar um valor.

## Executar localmente

```bash
npm install
npm run dev
```

Abrir: `http://localhost:4173`

## Build

```bash
npm run build
npm run start
```

A pasta final fica em `dist/`.

## Alterar WhatsApp

Edite `script.js`:

```js
const SITE = {
  whatsapp: '556492867210',
  message: '...'
};
```

## Alterar preço

No `index.html`, procure por `Sob orçamento` e substitua somente quando o preço real estiver confirmado.

## SEO antes de publicar

Substitua `https://SEU-DOMINIO.com/` em:
- `robots.txt`
- `sitemap.xml`

## Imagens

Os assets usados foram produzidos a partir do material visual fornecido na conversa. O comparativo é explicitamente identificado no site como ilustrativo e não representa o mesmo veículo.
