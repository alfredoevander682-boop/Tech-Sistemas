# Tech — Sistemas

Site institucional da **Tech — Sistemas**, empresa especializada em sistemas empresariais,
sites profissionais e soluções digitais à medida.

O site é 100% estático (HTML, CSS e JavaScript puros) — sem backend, sem base de dados
e sem dependências de build, pronto para deploy em qualquer serviço de hospedagem estática.

## Sobre o projecto

A Tech — Sistemas analisa o problema de cada empresa ou indivíduo e, com base nessa análise,
desenvolve a solução digital certa: sistemas de gestão, sites, plataformas e automatizações
construídos à medida, sem fórmulas prontas.

Este site apresenta os serviços, o método de trabalho e os canais de contacto da empresa,
com integração directa ao WhatsApp.

## Stack

- **HTML5** — estrutura semântica
- **CSS3** — design system próprio (variáveis CSS, flexbox, grid, animações)
- **JavaScript (vanilla)** — menu mobile, animações de scroll, contadores animados
- **SVG** — logo e ícones desenhados à medida
- **Google Fonts** — Space Grotesk (títulos) e Inter (texto)
- **Identidade** — preto + verde neon `#00E58C`, a partir do logótipo do Instagram

## Estrutura

```
tech-sistemas/
├── index.html          # Página única com todas as secções
├── ChatGPT Image 21_09_2026, 23_02_02.png  # Logótipo / foto de perfil (usado na secção Confiança + og:image)
└── assets/
    ├── styles.css      # Folha de estilos
    ├── script.js       # Interacções
    └── favicon.svg     # Logo TS (T branco + S neon) — o que aparece na aba do navegador
```

## Secções do site

1. **Hero** — proposta de valor e chamada para acção
2. **Estatísticas** — números da empresa com contadores animados
3. **Serviços** — Sistemas Empresariais, Sites, Soluções à Medida, Análise & Consultoria
4. **Processo** — método de trabalho em 4 passos
5. **Sobre nós** — história e princípios da empresa
6. **Contacto** — canal directo via WhatsApp (+244 951 428 009)
7. **Botão flutuante do WhatsApp** em todas as páginas

## Como executar localmente

Não requer instalação nem servidor. Basta abrir o ficheiro `index.html` num navegador.

Recomendado servir via HTTP para um comportamento idêntico ao de produção:

```bash
# Com Python
python -m http.server 8080

# Com Node.js
npx serve .
```

Depois aceder a `http://localhost:8080`.

## Deploy no Render

1. Crie um repositório no GitHub e suba os ficheiros mantendo a estrutura de pastas.
2. No [Render](https://render.com), clique em **New +** → **Static Site**.
3. Ligue o repositório recém-criado.
4. Configure:
   - **Build Command:** *(vazio)*
   - **Publish Directory:** `.`
5. Clique em **Create Static Site**.

O site fica disponível em `https://o-seu-app.onrender.com` em menos de um minuto.

O mesmo projecto pode ser publicado em qualquer outra plataforma estática
(Netlify, Vercel, GitHub Pages, Cloudflare Pages) sem qualquer alteração.

## Personalização rápida

| O quê                      | Onde                                             |
|----------------------------|--------------------------------------------------|
| Número do WhatsApp         | Pesquisar `wa.me/244951428009` em `index.html`   |
| Cores da marca             | Variáveis no topo de `assets/styles.css`         |
| Textos e secções           | `index.html`                                     |
| Animações e comportamentos | `assets/script.js`                               |
| Logo / foto de perfil   | `ChatGPT Image 21_09_2026, 23_02_02.png` (secção Confiança) |

## Licença

© Tech — Sistemas. Todos os direitos reservados.
Este código é proprietário e destina-se exclusivamente ao uso da empresa.



