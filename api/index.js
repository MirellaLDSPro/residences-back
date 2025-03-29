const express = require('express');
const app = express();

app.use(express.json());

// Exemplo de rota
app.get('/api/hello', (req, res) => {
    res.json({ message: 'API rodando na Vercel!' });
});

// Exporte como serverless function
module.exports = app;