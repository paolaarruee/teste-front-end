# Teste Front-End Jr. — Econverse

Projeto desenvolvido como parte do teste técnico para a vaga de **Desenvolvedor Front-End Jr. da Econverse**, utilizando React e TypeScript, com base no layout disponibilizado no Figma.

## Tecnologias utilizadas

- **React:** construção da interface por meio de componentes reutilizáveis.
- **TypeScript:** tipagem estática e maior segurança no desenvolvimento.
- **Vite:** ferramenta de desenvolvimento e build.
- **Sass (SCSS):** estilização dos componentes e responsividade.
- **ESLint:** análise estática do código e identificação de possíveis problemas.

## Funcionalidades

- Exibição de vitrine de produtos com informações consumidas de um arquivo JSON.
- Exibição de modal com as principais informações do produto selecionado.
- Navegação interativa entre as opções dos menus, com destaque visual em azul para a opção selecionada.
- Efeito de hover nas marcas, com leve deslocamento para destacar o item sob o cursor.
- Alteração da cor dos links do rodapé para roxo ao passar o mouse.
- Layout responsivo para diferentes tamanhos de tela.
- Componentização da interface para facilitar a organização e a reutilização do código.

## Estrutura do projeto

```text
vaga-front-end/
├── public/
│   └── Imagens e ícones utilizados no projeto
├── src/
│   ├── components/
│   │   ├── banner/
│   │   ├── brandGrid/
│   │   ├── categoryList/
│   │   ├── footer/
│   │   │   ├── FooterBottom/
│   │   │   ├── FooterMain/
│   │   │   └── Newsletter/
│   │   ├── Header/
│   │   ├── PartnerContainer/
│   │   │   └── Partners/
│   │   └── relatedProducts/
│   │       ├── ProductCard/
│   │       └── ProductTabs/
│   ├── models/
│   │   └── Interface dos dados
│   ├── services/
│   │   └── Serviço de consumo dos produtos
│   └── App.tsx
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Organização dos componentes

- **Banner:** apresenta o banner principal da página.
- **BrandGrid:** exibe as marcas disponíveis, com efeito visual ao passar o mouse.
- **CategoryList:** apresenta as categorias de produtos.
- **Footer:** agrupa as três partes do rodapé:
  - **FooterBottom:** parte inferior do rodapé.
  - **FooterMain:** componente principal que reúne as partes do rodapé.
  - **Newsletter:** seção de inscrição na newsletter.
- **Header:** contém o cabeçalho, a barra de pesquisa, os ícones e os menus de navegação.
- **PartnerContainer:** organiza a seção de parceiros, utilizando o componente `Partners`.
- **RelatedProducts:** reúne os componentes relacionados à vitrine de produtos:
  - **ProductCard:** apresenta as informações de cada produto.
  - **ProductTabs:** permite navegar entre as opções de produtos.

### Models

Contém a interface TypeScript utilizada para definir a estrutura e os tipos dos dados dos produtos.

### Services

Responsável pelo consumo dos dados dos produtos a partir do arquivo JSON, separando a lógica de acesso aos dados dos componentes visuais.

### App.tsx

Responsável por reunir e organizar os componentes que formam a página principal.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm, instalado junto com o Node.js.

### 1. Acesse a pasta do projeto

No terminal, entre na pasta `vaga-front-end`:

```bash
cd vaga-front-end
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm run dev
```

Após iniciar o servidor, o Vite exibirá no terminal o endereço local para acessar a aplicação pelo navegador, geralmente:

```text
http://localhost:5173
```

### 4. Gerar a versão de produção

Para compilar o projeto para produção, execute:

```bash
npm run build
```

Os arquivos compilados serão gerados no diretório `dist`.

### 5. Verificar o código com ESLint

Para executar a análise estática do código, utilize:

```bash
npm run lint
```

## Objetivo

Desenvolver uma interface de e-commerce baseada no layout proposto, priorizando a fidelidade visual, a responsividade, a organização do código, a componentização e a interatividade dos elementos.
