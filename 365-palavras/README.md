# 365 Palavras da Fé — Inglês, um dia por vez

Produto digital de baixo ticket para aprender inglês com base bíblica/evangélica:
**uma palavra por dia**, no formato **flashcard com recall ativo** (a pessoa tenta
lembrar a palavra em inglês *antes* de ver a resposta), com tradução, pronúncia,
exemplo, versículo relacionado e **áudio neural embutido**.

Faz parte da família de produtos VOICE (mesmo sistema visual dos projetos
"30 dias" e "Torre de Babel").

---

## O que já está pronto neste protótipo

- **Mês 1 completo — "Deus"** (29 palavras reais, com tradução, IPA, soletração
  para brasileiro, exemplo e versículo conferidos).
- **Motor de flashcard** com dica progressiva (som → letra inicial → nº de letras),
  palpite opcional e **animação de comemoração** ao acertar escrevendo.
- **Repetição espaçada de verdade** (domínio 1–5 por palavra; as mais frágeis
  voltam primeiro) na aba **Revisão**, com roleta "girar e treinar".
- **Progressão livre** — nada fica bloqueado; a pessoa avança no próprio ritmo.
- **Áudio de qualidade embutido** — palavra e frase de exemplo, geradas com voz
  neural (Kokoro TTS), tocando offline em qualquer aparelho (sem depender da voz
  do navegador).
- **Jornada** com os 12 meses/temas ("eras") e grade de dias.
- Progresso salvo em `localStorage`.

---

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex.: `365-palavras-da-fe`).
2. Suba **todo o conteúdo desta pasta** para a raiz do repositório
   (`index.html`, `.nojekyll`, `README.md`, `LICENSE`).
3. No repositório: **Settings → Pages**.
4. Em *Build and deployment*, escolha **Deploy from a branch**,
   branch `main` e pasta `/ (root)`. Salve.
5. Aguarde ~1 minuto. O site fica em
   `https://SEU-USUARIO.github.io/365-palavras-da-fe/`.

### Domínio próprio (opcional)
Para usar algo como `lp.comunidadevoice.com.br/palavras/`, aponte o domínio nas
configurações de **Pages → Custom domain** e crie o registro DNS conforme as
instruções do GitHub. (O arquivo `.nojekyll` já está incluído para o Pages servir
tudo sem processamento.)

---

## Estrutura dos arquivos

```
365-palavras-da-fe/
├── index.html     ← o produto inteiro (HTML + CSS + JS + áudios embutidos)
├── .nojekyll      ← faz o GitHub Pages servir os arquivos como estão
├── README.md      ← este arquivo
└── LICENSE        ← aviso de direitos (proprietário)
```

É um **arquivo único autossuficiente**: não depende de internet para funcionar
(só carrega as fontes do Google Fonts, que degradam para fontes do sistema se
estiverem offline).

---

## Notas técnicas

- **Áudio:** 58 clipes (29 palavras + 29 frases) gerados com **Kokoro TTS**
  (voz `af_heart`, 24 kHz), comprimidos em MP3 e embutidos em base64. Tocam via
  Web Audio API, destravados no primeiro toque (regra de autoplay dos navegadores).
- **Progresso:** salvo no `localStorage` do aparelho. Trocar de aparelho ou limpar
  o navegador zera o progresso — isso só se resolve com conta + servidor numa
  fase futura.

---

## Roadmap / o que falta para lançar

1. **Popular os meses 2 a 12** (mesmo motor, é só alimentar o conteúdo).
2. **Definir a tradução bíblica** dos versículos (ARC / NVI / ACF / própria) e
   checar os direitos de uso da tradução escolhida.
3. **Revisão humana** do banco por um pastor/professor (padrão-ouro antes de vender).
4. **Link do CTA** da tela final apontando para a oferta principal (curso/comunidade).
5. Ao chegar perto dos 365, **externalizar o áudio** (sprite único + hospedagem)
   para não deixar o `index.html` grande demais.
6. (Opcional, fase 2) Trocar a voz neural por **locução humana** para o padrão
   máximo de qualidade — a arquitetura já está pronta para a troca.

---

## Créditos

- Voz gerada com **Kokoro TTS** (modelo open-source, licença Apache 2.0).
- Fontes: Archivo, Inter e Spectral (Google Fonts, licença SIL Open Font).
