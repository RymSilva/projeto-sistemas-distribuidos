# Projeto de Sistemas Distribuidos

Este projeto consiste em uma aplicação WEB Service client-side desenvolvida para integrar com a infraestrutura de banco de dados NoSQL da Technoworks.

## 🚀 Tecnologias Utilizadas
- **Front-End:** React + TypeScript
- **Protocolo de Comunicação:** REST / HTTP (JSON)
- **Persistência / Banco de Dados:** NoSQL (Technoworks API)

## 📌 Funcionalidades
- Integração com a rota `/api` para gerenciamento de itens (`titulo`, `descricao`, `preco`).
- Manipulação da coleção livre via rota `/rest`.
- Leitura restrita via rota `/Easy` (método GET).
- Identificação única de dados através do atributo `ID`.

## 🛠️ Estrutura do Projeto
- `src/apiService.ts`: Módulo de serviço responsável pela comunicação REST com os endpoints da API.
- `src/App.tsx`: Interface do cliente em React/TypeScript para interação e testes.