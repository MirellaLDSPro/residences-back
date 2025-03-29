const express = require('express');
const app = express();

// Middleware para permitir JSON no body das requisições
app.use(express.json());

// Dados temporários em memória
let contatos = [
    { id: 1, nome: "João", telefone: "61-9999-9999" },
    { id: 2, nome: "Maria", telefone: "61-8888-8888" }
];

// Rota GET para listar todos os contatos
app.get('/contatos', (req, res) => {
    res.json(contatos);
});

// Rota POST para adicionar novo contato
app.post('/contatos', (req, res) => {
    const novoContato = {
        id: contatos.length + 1,
        ...req.body
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});