# Torre de Babel — Teste de Proficiência em Inglês

Teste de proficiência em inglês gamificado, com temática bíblica, seguindo o framework CEFR (A1 a C2). A cada acerto o aluno constrói um andar da torre; três acertos seguidos sobem um nível, dois erros seguidos descem um.

## Como funciona

- **Começo fácil:** o teste inicia no nível A1, pensado para um público majoritariamente iniciante.
- **Motor de progressão:** 3 acertos consecutivos sobem um andar; 2 erros consecutivos descem um. Se o aluno cai para um andar já conquistado, basta 1 acerto para voltar ao topo que já tinha alcançado.
- **Resultado:** o nível final é o andar mais alto realmente consolidado.
- **Banco de perguntas:** 120 perguntas revisadas (cerca de 20 por nível), ambientadas em histórias bíblicas, sem repetição dentro da mesma sessão.

## Publicar com GitHub Pages

1. Suba estes arquivos para um repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
4. Salve. Em alguns minutos o teste estará no ar em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Antes de publicar

O botão final "Quero subir mais alto" aponta para uma âncora de exemplo `#oferta`. Abra o `index.html`, procure por `#oferta` e troque pelo link real do seu produto principal.

## Estrutura

```
.
├── index.html   # o teste completo (HTML + CSS + JS, tudo em um arquivo)
├── README.md
└── LICENSE
```

O `index.html` é totalmente autocontido: não depende de nenhum servidor, build ou biblioteca externa (apenas fontes do Google Fonts, carregadas via CDN).
