<h1 align="center">Tractian | Painel Administrativo :chart_with_upwards_trend:</h1> 

<p align="center">
  <a href="https://tractian-application-challenge.herokuapp.com/">Link para acessar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_with_curl-descrição-do-projeto">Descrição do projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bulb-solução-proposta">Solução proposta</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-como-rodar-o-projeto">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bookmark_tabs-requisitos-passados-pela-tractian">Requisitos</a>
</p>

<p align="center">
	<img width="100%" src="src/assets/to_git/home_page.gif">
</p>

<p align="center">
	<img width="100%" src="src/assets/to_git/complete_task.gif">
</p>

<p align="center">
	<img width="400px" src="src/assets/to_git/add_task.gif">
	<img width="400px" src="src/assets/to_git/delete_task.gif">
	<img width="400px" src="src/assets/to_git/see_more.gif">
	<img width="400px" src="src/assets/to_git/edit_task.gif">
</p>

## :page_with_curl: Descrição do projeto
Teste prático proposto pela Tractian no processo de seleção com o objetivo de validar os conhecimentos técnicos em desenvolvimento frontend, lógica de programação e entendimento da demanda proposta.

## :bulb: Solução proposta
O sistema deveria consumir uma API Fake e a partir da leitura desse dados plotar gráficos e exibir informações que fossem consideradas relevantes para o contexto. Sendo assim, para este projeto, optei por usar o redux para o compartilhamento de estado entre os componentes e o redux persist para alocar os dados no localstorage. Dessa forma, pude fazer a operação de leitura da API fake para gerar o estado inicial da aplicação e depois com auxilio do redux toolkit executar ações de "create, read, update and delete" que também foram pedidas do desafio.

## :hammer: Tecnologias utilizadas
- [React](https://reactjs.org)
- [Node.js](https://nodejs.org/en/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Highcharts](https://www.highcharts.com/) 
- [Ant Design](https://ant.design/) 

## :computer: Como rodar o projeto

**Você pode clonar o projeto e rodá-lo localmente seguindo os passos abaixo**

1. `$ git clone https://github.com/caiodavid/tractian-application-challenge.git` para clonar o projeto
2. `$ yarn` para instalar as dependências do projeto
3. `$ yarn dev`
4. Acessar [http://localhost:3000](http://localhost:3000) no navegador
	
## :bookmark_tabs: Requisitos passados pela Tractian

- Mostrar todas as caracteristicas dos ativos;
- Mostrar empresas, unidades e usuários;
- Ações como delegar responsável, atualizar ativo, empresa, unidade e usuários;
- Utilizar gráficos para mostrar os níveis de saúde, status e etc.
- Consumir API (https://github.com/tractian/fake-api)
- Utilizar o React
- Utilizar o Highcharts
- AntDesign (opcional)

## Autor
---

<a href="https://github.com/caiodavid">
<img border-radius = "50%" src="https://avatars.githubusercontent.com/u/62821483?v=4" width="100px;" alt=""/>
<br />
<sub><b>Caio David de Souza</b></sub></a> <a href="https://github.com/caiodavid" title="GitHub">🚀</a>

Feito com ❤️ por Caio 👋🏽 
