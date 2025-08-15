# Pizza Shop Client

Aplicação web para pedidos online de pizzas, desenvolvida como interface cliente de um sistema de pizzaria. Permite aos usuários navegar no cardápio, montar pedidos personalizados, acompanhar o status da entrega e realizar cadastro e login.

---

## Principais funcionalidades e casos de uso

- Visualização do cardápio com pizzas disponíveis
- Personalização de pedidos (sabores, tamanhos, adicionais)
- Carrinho de compras dinâmico
- Cadastro e autenticação de usuários
- Histórico e acompanhamento de pedidos
- Integração com backend para processamento dos pedidos
- Interface responsiva para dispositivos móveis e desktop

---

## Stack e tecnologias utilizadas

- **ReactJS**: Construção da interface do usuário
- **JavaScript/TypeScript**: Lógica da aplicação
- **React Router**: Gerenciamento de rotas
- **Axios ou Fetch API**: Comunicação com backend
- **Redux ou Context API**: Gerenciamento de estado global (se aplicável)
- **Styled-components/CSS Modules/SASS**: Estilização dos componentes
- **Jest/React Testing Library**: Testes unitários (se aplicável)

---

## Estrutura de pastas

```
pizza-shop-client/
├── public/                # Arquivos estáticos (index.html, favicon, etc)
├── src/
│   ├── assets/            # Imagens, ícones e recursos estáticos
│   ├── components/        # Componentes reutilizáveis da interface
│   ├── pages/             # Páginas principais e rotas
│   ├── services/          # Serviços de integração com APIs
│   ├── store/             # Gerenciamento de estado global
│   ├── styles/            # Estilização global e temas
│   ├── App.js             # Componente principal da aplicação
│   └── index.js           # Ponto de entrada da aplicação React
├── .env.example           # Exemplo de variáveis de ambiente
├── package.json           # Dependências e scripts do projeto
└── README.md              # Documentação do projeto
```

### Explicação das principais partes

- **public/**: Arquivos acessíveis diretamente pelo navegador.
- **src/assets/**: Recursos estáticos usados pelos componentes.
- **src/components/**: Botões, cards, modais, inputs reutilizáveis etc.
- **src/pages/**: Home, Cardápio, Carrinho, Login, Cadastro, Pedidos.
- **src/services/**: Funções para comunicação com APIs do backend.
- **src/store/**: Estado global da aplicação (Redux, Context, etc).
- **src/styles/**: Temas, variáveis de cores, estilos globais.
- **.env.example**: Modelo para variáveis sensíveis (ex: endpoints da API).

---

## Instalação e execução local

### Pré-requisitos

- Node.js (versão recomendada: 18.x+)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Cardosofiles/pizza-shop-client.git
   cd pizza-shop-client
   ```

2. **Configure as variáveis de ambiente**
   - Copie o arquivo `.env.example` para `.env` e preencha conforme necessário (ex: URL do backend).

3. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   yarn start
   ```

5. **Acesse a aplicação**
   - Abra o navegador em [http://localhost:3000](http://localhost:3000)

---

## Como executar testes

```bash
npm test
# ou
yarn test
```

---

## Exemplos de uso das funcionalidades

- **Adicionar pizza ao carrinho:**  
  Navegue até o cardápio, selecione sabor/tamanho/opcionais e clique em “Adicionar ao carrinho”.
- **Finalizar pedido:**  
  No carrinho, clique em “Finalizar pedido”, preencha dados (ou faça login/cadastro) e envie seu pedido.
- **Acompanhar pedido:**  
  Após o pedido, acesse a área “Meus pedidos” para ver status e detalhes da entrega.

---

## Boas práticas e recomendações

- Mantenha as dependências do projeto sempre atualizadas.
- Utilize componentes reutilizáveis para evitar duplicidade de código.
- Utilize variáveis de ambiente para URLs e chaves sensíveis.
- Siga padrões de nomenclatura e organização de arquivos.
- Escreva testes sempre que possível para garantir a qualidade do código.
- Contribuições são bem-vindas! Siga as diretrizes do repositório para abrir issues ou pull requests.

---

## 📫 Contato

<div align="center">

<a href="mailto:cardosofiles@outlook.com">
  <img src="https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" alt="Email"/>
</a>
<a href="https://www.linkedin.com/in/joaobatista-dev/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/Cardosofiles" target="_blank">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://cardosofiles.dev/" target="_blank">
  <img src="https://img.shields.io/badge/Portfólio-222222?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfólio"/>
</a>

</div>
