# Cyber Devs: seletor de personagens

Página interativa com personagens no estilo Dragon Ball e estética cyberpunk. Ao clicar em um ícone, a página troca o personagem em destaque, a imagem de fundo e a descrição.

**[Ver o projeto online](https://projeto-dragon-ball-js.vercel.app)**

![Demonstração do projeto](https://github.com/user-attachments/assets/f4cfe1a6-320f-4c5f-afa6-45f8e8daf6fb)

## Funcionalidades

- Troca de personagem com animação de transição
- Imagens diferentes para desktop e mobile com `<picture>`
- Layout responsivo: menu lateral no desktop e menu inferior no mobile
- Navegação por teclado, com foco visível nos botões
- Cor de destaque própria para cada personagem

## Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, media queries, custom properties, animações)
- JavaScript puro (manipulação do DOM)

## Decisões técnicas

- **`data-personagem` em vez de índice.** Cada botão aponta para o `id` do personagem que controla. Assim a lógica não quebra se a ordem dos elementos no HTML mudar.
- **Atributo `hidden` para esconder personagens.** O conteúdo oculto sai da árvore de acessibilidade, e o leitor de tela anuncia apenas o personagem visível.
- **Acessibilidade nos botões.** Os botões usam `aria-label` com o nome do personagem e `aria-pressed` para indicar qual está selecionado. O `<nav>` agrupa a escolha.
- **Cor por variável CSS.** A cor de destaque de cada personagem é definida em `--cor-destaque`, em vez de uma regra CSS por personagem.
- **Imagens em WebP.** A conversão de PNG para WebP reduziu o peso das imagens de cerca de 4,1 MB para 0,8 MB.
- **`prefers-reduced-motion`.** As animações são desativadas para quem configurou o sistema para reduzir movimento.

## Como rodar localmente

```bash
git clone https://github.com/josealbertodeev/projeto-dragon-ball-js.git
cd projeto-dragon-ball-js
```

Abra o `index.html` no navegador ou use a extensão Live Server do VS Code.

## Estrutura

```
projeto-dragon-ball-js/
├── index.html
└── src/
    ├── css/
    │   ├── reset.css
    │   ├── estilos.css
    │   └── responsivo.css
    ├── js/
    │   └── index.js
    └── imagens/
```

## Origem do projeto

A base do projeto foi desenvolvida durante a Semana do Zero ao Programador Contratado, do DevClub. Depois, refatorei o JavaScript, melhorei a acessibilidade, otimizei as imagens e adicionei a animação de transição.

## Próximos passos

- Navegação entre personagens pelas setas do teclado
- Personagem selecionado na URL (`#codepixie`), para compartilhar o link

## Autor

**José Alberto**: [LinkedIn](https://www.linkedin.com/in/josealbertofarias/) · [Portfólio](https://josealbertodeev.github.io/portfolio/)
