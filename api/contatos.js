const express = require('express');
const app = express();

app.use(express.json());

let contatos = [
    { id: 1, nome: "João", telefone: "61-9999-9999" }
];

app.get('/api/contatos', (req, res) => {
    res.json(contatos);
});

app.post('/api/contatos', (req, res) => {
    const novoContato = {
        id: contatos.length + 1,
        ...req.body
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
});

module.exports = app;