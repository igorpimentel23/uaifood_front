# Uaifood web

Aplicação em ReactJS para consulta de restaurantes cadastrados com a API Uaifood.

## Começando

Estas instruções te darão uma cópia do projeto pronta para rodar na sua máquina local para propositos de testes.

### Pré-requisitos

Para a instalação do projeto, é necessário que o Docker Compose esteja instalado na máquina.

[Docker Compose](https://docs.docker.com/compose/install/)

### Instalando

Depois de clonar e baixar o projeto, abra o terminal de comando na pasta do projeto, e execute:

```
docker-compose up build -d
```

Após o término, para verificar se os containers foram construidos com sucesso, executar o comando:

```
docker ps
```

Os seguintes dados devem aparecer:

```
CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                    NAMES
8e7815e5654e        uaifood_front_frontend   "docker-entrypoint.s…"   About an hour ago   Up About an hour    0.0.0.0:3000->3000/tcp   uaifood_front
```

Para acessar a aplicação, acesse no navegador o endereço:

```
http://localhost:3000/
```

## Autores

* **Igor Pimentel** - *Trabalho inicial* - [igorpimentel23](https://github.com/igorpimentel23)


## Licença

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
