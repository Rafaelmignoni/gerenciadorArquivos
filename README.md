# Gerenciador de Arquivos

Sistema de gerenciamento de arquivos contendo:

  - backend
  - frontend
  - Ambiente rodando em cima de containers
 
# backend

Backend construído utilizando nodejs + adonisjs.
Nele trabalhamos com:
 
- Route control 
- Controllers
- Models
- Migrations
- Seed
- Middleware
- Exceptions
- Validators
- Authenticator
- Swagger: API Documentation


Obs: Uma vez que o sistema se encontra para fins didáticos, o arquivo ".env" foi incluido para facilitar o funcionamento


# Frontend

Frontend usando Javascript + Reactjs.
Nele trabalhamos com:

- Axios 
- PropTypes
- Router Dom
- Redux
- Styled Components
- History


# Ambiente

Para a criação do ambiente utilizamos:

- Postgres Database 
- Node
- Dockerize
- Dockerfile
- Docker Compose


---


# Instalação

Instalar o docker:

- Veja: [DOCKER INSTALL](https://docs.docker.com/engine/install/)

Instalar o docker compose:

- Veja: [DOCKER COMPOSE INSTALL](https://docs.docker.com/compose/install/) 




Apos instalar o docker e o docker compose ir na pasta que contenha o projeto (backend, frontend e docker-composer) e executar o seguinte comando:

```sh
$ docker-compose up
```

Demorando apenas alguns segundos após executar o compose o sistema já se encontra no ar e podendo ser acessado.

---
# Acesso a Documentação e ao Sistema

### Documentação

A documentação pode ser acessada através dos seguintes links:

- Caminho Raiz: http://localhost:3333/
ou
- Caminho Direto: http://localhost:3333/docs/

### Sistema

O Sistema pode ser acessado através do seguinte link:

- http://localhost:3000/signin

Para acesso rápido um usuário padrão já vem devidamente cadastrado, podendo ser acessado inicialmente com os seguintes acessos:

* email:
 admin@admin.com
- password:
 admin 


