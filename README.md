# Pokédex

Uma Pokédex interativa, feita em React, com os 151 Pokémon de Kanto, busca por nome ou número, filtro por tipo, paginação e um visual customizável por paleta de cores.

![Tela-principal-da-pokedex](/docs/tela-principal.png)

![Demonstração](/docs/Animacao.gif)


## ✨ Funcionalidades

- 🔍 **Busca por nome ou número** — encontra um Pokémon digitando parte do nome (aceita letras faltando, como `pkachu`) ou o número da Pokédex
- 🙈 **Mensagem de "não encontrado"** — avisa quando nenhum Pokémon corresponde à busca
- 🏷️ **Filtro por tipo** — chips roláveis (Normal, Fogo, Água, Planta, Elétrico, Psíquico, etc.) para filtrar a lista
- 📄 **Paginação** — navegação por números de página, com botões "Anterior" e "Próxima"
- 📊 **Cartas de status** — cada Pokémon mostra HP, Ataque e Defesa em barrinhas coloridas
- 🔎 **Modal de detalhes** — clique em um card para ver mais informações do Pokémon; o último aberto fica salvo no `localStorage`
- 🎨 **Tema customizável** — todas as cores vêm de variáveis CSS (`:root`), fáceis de trocar sem mexer no resto do código
- 🖼️ **Identidade visual própria** — logo em SVG (Pokébola) usada como ícone do app e favicon

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) — build tool e servidor de desenvolvimento
- [match-sorter](https://github.com/kentcdodds/match-sorter) — busca aproximada por nome
- [PokeAPI](https://pokeapi.co/) — fonte dos dados

## 📁 Estrutura do projeto

```
projeto-pokedex/
├── public/                   # arquivos estáticos (favicon, imagens)
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   ├── header/           # cabeçalho com logo, título e filtros
│   │   │   ├── pokemon-modal/    # modal com os detalhes do Pokémon
│   │   │   └── search-pokemon/   # campo de busca
│   │   └── modules/
│   │       ├── badge/            # badge de tipo (ex: "FOGO", "ÁGUA")
│   │       ├── chip/             # chip de filtro
│   │       ├── pokemon-card/     # carta de um Pokémon
│   │       └── stat-bar/         # barrinha de status (HP/ATK/DEF)
│   ├── pages/                # páginas da aplicação (lista de Pokémon)
│   ├── queries/              # chamadas e hooks de busca de dados
│   ├── services/             # integração com a PokeAPI
│   ├── types/                # tipos/contratos de dados
│   ├── utils/                # funções auxiliares
│   ├── infra/                # configurações de infraestrutura (HTTP)
│   ├── mocks/                # dados fake para desenvolvimento/testes
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Como rodar o projeto

```bash
# clona o repositório e entra na pasta
git clone <url-do-repositorio>
cd projeto-pokedex

# instala as dependências
npm install

# inicia o servidor de desenvolvimento
npm run dev

# gera a versão de produção
npm run build

# visualiza a build de produção localmente
npm run preview
```

Depois de `npm run dev`, o projeto fica disponível em `http://localhost:5173` (porta padrão do Vite).

## 🎨 Customizando as cores

Todas as cores do tema ficam centralizadas em variáveis CSS, no `:root`. Para trocar a paleta, basta editar os valores — nenhum outro lugar do CSS precisa mudar:

```css
:root {
  --bg-primary: #FDF1E6;
  --surface: #FFFFFF;
  --accent: #E8586A;
  --text-primary: #252534;
  /* ... */
}
```

As cores por tipo de Pokémon (fogo, água, planta, etc.) ficam separadas, num objeto no JavaScript, já que precisam ser escolhidas dinamicamente de acordo com o tipo de cada Pokémon.

## 📡 Dados

Os dados dos Pokémon vêm da [PokeAPI](https://pokeapi.co/), uma API pública e gratuita.

## 📄 Licença

Projeto pessoal de estudo — sinta-se à vontade para usar como referência.