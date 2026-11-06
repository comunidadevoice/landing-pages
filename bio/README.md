# Link da Bio — Comunidade Voice

Página estática. Nada para instalar, nada para compilar.

## Arquivos
- `index.html` — a página inteira (CSS embutido)
- `img/pamela.jpg` — foto de fundo
- `img/mesa.jpg` — card Método Voice
- `img/palco.jpg` — card Comunidade Voice

## Subir no GitHub Pages
1. Crie um repositório novo (ex.: `link-bio`).
2. Suba `index.html`, a pasta `img/` e este README na raiz do repositório.
3. Settings › Pages › Source: **Deploy from a branch** › Branch: `main` / pasta `/ (root)` › Save.
4. Em 1–2 minutos a página fica em `https://SEU-USUARIO.github.io/link-bio/`.

## Domínio próprio (opcional)
1. Settings › Pages › Custom domain: `bio.comunidadevoice.com.br` › Save.
2. No Cloudflare, crie um CNAME `bio` apontando para `SEU-USUARIO.github.io` (proxy desligado, nuvem cinza).
3. Volte no GitHub e marque **Enforce HTTPS** quando liberar.

## Ícone da aba (favicon)
Usa o mesmo ícone da LP, carregado de `lp.comunidadevoice.com.br`.
Para deixar tudo dentro do repositório: baixe `https://lp.comunidadevoice.com.br/favicon.ico`
e `https://lp.comunidadevoice.com.br/apple-touch-icon.png`, coloque os dois na raiz
e troque os dois `<link rel="icon" ...>` do `index.html` por `href="favicon.ico"` e `href="apple-touch-icon.png"`.

## Layout
- Celular: foto cheia, nome e @ no alto à direita, cards a partir da altura do joelho.
- Desktop: nome e @ centralizados no topo, os três cards logo abaixo, tudo em 400px no centro.

## Trocar fotos
Substitua o arquivo dentro de `img/` mantendo o mesmo nome. Proporções usadas:
- `pamela.jpg` vertical (9:16)
- `mesa.jpg` e `palco.jpg` panorâmicas (~2.2:1), com você na metade direita

## Links dos botões
Estão em `index.html`, nos três `<a href=...>`. É só editar o endereço.
