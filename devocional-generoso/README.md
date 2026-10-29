# Devocional Generoso — landing page

Página de uma seção só, HTML/CSS/JS puro, sem build e sem dependência além da fonte do Google.

## Conteúdo da pasta

```
devocional-generoso/
├── index.html     ← a página inteira (estilos e scripts embutidos)
└── logo-mark.png  ← o V da marca usado na barra superior (180×180)
```

## Como subir no GitHub

1. No repositório que serve `lp.comunidadevoice.com.br`, crie a pasta `devocional-generoso/` na raiz.
2. Suba os dois arquivos acima dentro dela (Add file → Upload files).
3. Commit. A página fica em **https://lp.comunidadevoice.com.br/devocional-generoso/**

## Dependências da página

- A capa do vídeo é carregada de `/metodo-voice/img/devo-pam.webp`, que já está no ar.
  Não precisa duplicar o arquivo. Se um dia a pasta `metodo-voice` mudar de lugar,
  atualize o `src` da tag `img.vid-poster`.
- Fonte Fraunces + Inter via Google Fonts (uma única requisição).

## Onde mexer

| O quê | Onde |
|---|---|
| Link do grupo de WhatsApp | `var WHATSAPP_GROUP_URL` no script do final |
| ID do vídeo do YouTube | atributo `data-id` do botão `#devo` |
| Meta Pixel | bloco `fbq('init', ...)` — ID `1268398628617400` |
| Cores da marca | `:root` no topo do CSS |

## Comportamento

- **CTA**: único botão da página, aponta para o grupo do WhatsApp e dispara o evento `Lead`.
- **Vídeo**: o YouTube não carrega junto com a página. No clique, o card troca o próprio
  conteúdo por um iframe com autoplay e dispara o evento customizado `PlayDevocional`.
  Aberto como arquivo local (`file:`), abre o Short em nova guia em vez de embutir.
- **Pixel**: `PageView` no carregamento, `Lead` no CTA, `PlayDevocional` no vídeo, com `<noscript>`.

## Responsivo

- Acima de 980px: texto à esquerda, vídeo à direita, 1,5 cm entre os dois.
- Abaixo de 980px: empilha, texto primeiro, botão em 100% da largura.
- Telas de desktop baixas (altura ≤ 780px): título, botão e vídeo reduzem para o CTA
  não sair da primeira tela.
- Abaixo de 760px some "English With Purpose"; abaixo de 540px fica só o quadrado do logo.
- `prefers-reduced-motion` desliga as animações.

## Depois de publicar

- Testar no console: `typeof fbq === 'function'` e um clique no CTA (deve registrar 1 `Lead`).
- Conferir a capa do vídeo carregando (caminho `/metodo-voice/img/...`).
