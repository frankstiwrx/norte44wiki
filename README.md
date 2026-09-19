# Norteverso DRNG

> Football career data generator based on season logic, player profiles and aggregated career passages, with JSON output.

---

## English

### About

**Norteverso DRNG** is a browser-based generator created to produce structured football career data for fictional players.

Instead of generating isolated random numbers, the project uses season-based rules and player parameters to build more coherent career histories. The generated data can include club passages, loans, divisions, squad roles, career phases, special events, transfers and national-team records.

At the end of the process, the career data is merged into continuous passages and exported as JSON.

### Main features

- Season-by-season career generation
- Multiple club passages
- Loan and contract-owner logic
- First, second and third division support
- Squad-role configuration
- Career phases such as development, peak and decline
- Special season events
- Transfer split presets when a player represents more than one club in the same season
- Youth and senior national-team data
- Aggregation of continuous club and national-team passages
- Final JSON export
- Copy-ready generated output

### How it works

The user defines a player profile and career period, adds the clubs involved and then generates the seasons.

Each season can be adjusted with information such as:

- squad role
- career phase
- special event
- transfer distribution

The generation engine calculates the season data and then merges consecutive passages before producing the final JSON.

### Technologies

- HTML
- CSS
- JavaScript
- ES Modules
- JSON

### Project structure

```text
NorteversoDRNG/
├── engine/
│   ├── rules.js
│   ├── calc.js
│   ├── merge.js
│   └── export.js
├── icon/
├── app.js
├── index.html
└── style.css
```

### Purpose

This project was created as a support tool for the fictional football universe known as **Norteverso**, helping generate consistent career records for players without manually defining every statistic and passage.

---

## Português

### Sobre

O **Norteverso DRNG** é um gerador executado no navegador criado para produzir dados estruturados de carreira para jogadores fictícios de futebol.

Em vez de gerar apenas números aleatórios isolados, o projeto utiliza regras por temporada e parâmetros do jogador para construir trajetórias mais coerentes. Os dados podem incluir passagens por clubes, empréstimos, divisões, papel no elenco, fases da carreira, eventos especiais, transferências e registros por seleções.

Ao final do processo, os dados são agrupados em passagens contínuas e exportados em formato JSON.

### Principais funcionalidades

- Geração de carreira temporada por temporada
- Múltiplas passagens por clubes
- Lógica de empréstimos e clube dono do contrato
- Suporte à 1ª, 2ª e 3ª divisão
- Configuração do papel do jogador no elenco
- Fases de carreira, como desenvolvimento, auge e decadência
- Eventos especiais por temporada
- Divisão de jogos e gols em temporadas com mais de um clube
- Dados de seleção de base e seleção principal
- Agrupamento de passagens contínuas
- Exportação final em JSON
- Saída pronta para copiar

### Como funciona

O usuário define o perfil do jogador e o período da carreira, adiciona os clubes envolvidos e gera as temporadas.

Cada temporada pode receber ajustes como:

- papel no elenco
- fase da carreira
- evento especial
- distribuição em caso de transferência

O motor de geração calcula os dados de cada temporada e depois agrupa passagens consecutivas antes de produzir o JSON final.

### Tecnologias

- HTML
- CSS
- JavaScript
- ES Modules
- JSON

### Estrutura do projeto

```text
NorteversoDRNG/
├── engine/
│   ├── rules.js
│   ├── calc.js
│   ├── merge.js
│   └── export.js
├── icon/
├── app.js
├── index.html
└── style.css
```

### Objetivo

O projeto foi criado como uma ferramenta de apoio ao universo fictício de futebol **Norteverso**, ajudando a gerar carreiras coerentes para jogadores sem precisar definir manualmente cada estatística e passagem.
