k121 - Amigo Secreto
============================

## O que é?
Um sistema para sorteio de um amigo secreto, desenvolvido em Node, Express e Angular 1.7

## Demo


## Como executar?
Baixe o projeto
```
 git clone https://github.com/adrianotorres/k121
 cd k121
```

### Executando com Docker
Certifique-se de ter o docker e docker-compose instalados
```
 docker-compose build
 docker-compose run api npm install
 docker-compose up
 Acesse http://localhost:9000
```

### Executando com NPM local
```
 npm install
 npm run build
 npm run back:dev
 Acesse http://localhost:4040
```

```
 ou, em duas abas separadas
 npm install
 npm run front:dev
 npm run back:dev
 Acesse http://localhost:9000
```

### Testes
```
 npm run test
```