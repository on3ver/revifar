# REVIFAR — Landing Page Premium

Landing page comercial desenvolvida em Next.js + TypeScript + Tailwind CSS + Framer Motion, pronta para deploy na Vercel.

## 1. Instalação

```bash
npm install
```

## 2. Ambiente local

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## 3. Build

```bash
npm run build
```

## 4. Deploy na Vercel

1. Envie este projeto para um repositório Git.
2. Importe o repositório na Vercel.
3. Framework Preset: Next.js.
4. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER` com DDI + DDD + número, sem símbolos.
5. Clique em Deploy.

## 5. Onde alterar os dados

Arquivo principal de configuração:

`lib/config.ts`

Ali você pode ajustar:

- WhatsApp
- Instagram
- cidade
- estado
- área de atendimento
- mensagem padrão do WhatsApp
- link do desenvolvedor

Textos do processo e FAQ:

`lib/content.ts`

Imagens:

As URLs editoriais estão diretamente nos componentes de seção e podem ser substituídas por arquivos locais em `/public/images` quando houver fotos reais do serviço.

## Observação importante

A página não usa as fotos do perfil do Instagram fornecido como referência. As imagens atuais são fotografias de apoio de bancos de imagem e o comparativo Before/After é explicitamente apresentado como ilustrativo, usando a mesma imagem nos dois lados.
