# Pesquisa - Security Testing (FATEC SJC)

Este repositório contém um exemplo prático utilizado na apresentação da disciplina Qualidade e Testes de Software, com foco em Security Testing. O objetivo é demonstrar a identificação e correção de uma vulnerabilidade do tipo SQL Injection em uma API construída com Node.js e MySQL, utilizando a ferramenta OWASP ZAP.

## Objetivo

- Simular uma aplicação vulnerável a SQL Injection
- Detectar a falha utilizando OWASP ZAP (Active Scan) e sqlmap
- Corrigir a vulnerabilidade com prepared statements
- Reexecutar os testes para validar a correção

## Tecnologias utilizadas

- Node.js
- Express
- MySQL / MySQL2
- OWASP ZAP
- sqlmap

## Estrutura do projeto

api-vulneravel/
├── index.js         → Código da API vulnerável
├── index-corrigido.js → Código com correção via prepared statement
├── README.md        → Este arquivo
└── init.sql         → Script para criação do banco de dados e tabela

## Como executar

1. Clone o repositório:
git clone https://github.com/jeejdev/pesquisa-security-test
cd pesquisa-security-test

2. Instale as dependências:
npm install

3. Crie um banco de dados MySQL chamado "teste" e rode o script init.sql:
CREATE DATABASE teste;
USE teste;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100)
);

INSERT INTO users (name) VALUES ("Skylab"), ("Nicolas Cage"), ("Park Ji-min");

4. Inicie a API vulnerável:
node index.js

5. Acesse no navegador:
http://localhost:3000/user?id=1

## Demonstração com OWASP ZAP

- Configurar o navegador para proxy (localhost:8080)
- Interceptar o tráfego da API
- Rodar "Active Scan" no endpoint /user?id=1
- Observar o alerta de SQL Injection
- Corrigir o código utilizando prepared statements
- Reiniciar a API com o arquivo corrigido
- Repetir o scan para validar a correção

# Demonstração com sqlmap

npm install sqlmap

sqlmap -u "http://ipv4-local:3000/user?id=1" --batch --dbs --flush-session

## Créditos

Projeto desenvolvido como parte da disciplina "Qualidade e Testes de Software" — FATEC São José dos Campos, 2025.

Autor: Grupo Antemontegon - ou algo assim - 

Ferramenta principal: OWASP ZAP  
Tecnologia: Segurança em aplicações web

MIT License
