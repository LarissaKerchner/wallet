# Wallet

O projeto Wallet, também conhecido como TrybeWallet, foi desenvolvido durante o segundo período do módulo de Front-end na Trybe. Esta aplicação de carteira de controle de gastos com conversor de moedas permite aos usuários adicionar e remover gastos em diversas moedas, visualizar uma tabela com esses gastos, e ver o total convertido para reais.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- TypeScript
- Vite
- React
- Redux para gerenciamento de estados


## Pré-requisitos

Para rodar a aplicação, você precisará de:

- Node.js versão 18.x instalado ([Download Node.js](https://nodejs.org/))

## Instalação e Execução

Para instalar e executar a aplicação localmente, siga os passos abaixo:

```
git clone git@github.com:LarissaKerchner/wallet.git
```
3. Navegue até o diretório do projeto:
```
cd wallet
```
4. Instale as dependências do projeto utilizando npm (ou yarn, se preferir):
```
npm install
```
5. Após a instalação das dependências, você pode iniciar a aplicação com o seguinte comando:
```
npm run dev
```
Isso iniciará um servidor de desenvolvimento local e abrirá a aplicação em seu navegador padrão. Você pode acessá-la em http://localhost:3000.

## Scripts Disponíveis

No diretório do projeto, você pode rodar:

- `npm run dev`: Executa a aplicação em modo de desenvolvimento.
- `npm run build`: Constrói a aplicação para produção na pasta `dist`.
- `npm run test`: Executa os testes unitários com Vitest.
- `npm run lint`: Executa o ESLint para identificar problemas no código.
- `npm run lint:styles`: Executa o Stylelint para verificar os arquivos CSS.

## Desafios do Projeto

O principal desafio encontrado foi a implementação do Redux para o gerenciamento de estados globais, especialmente pela complexidade de sincronizar estados entre múltiplos componentes de forma eficiente.

## Próximos Passos

- Implementação de funcionalidade para editar gastos já registrados.
- Aumentar a cobertura de testes para garantir a robustez da aplicação.
- Adicionar responsividade ao design para aprimorar a experiência do usuário em dispositivos móveis.

## Contribuições

Contribuições para o projeto são sempre bem-vindas. Se deseja contribuir, faça um fork do repositório, realize suas alterações e submeta uma Pull Request.
