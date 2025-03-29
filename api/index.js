const express = require('express');
const app = express();

app.use(express.json());

// Rotas
app.get('/api/hello', (req, res) => {
    res.json({ message: 'API funcionando em qualquer ambiente!' });
});

// Configuração para ambientes diferentes
if (require.main === module) {
    // Execução local
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor local rodando na porta ${PORT}`);
    });
} else {
    // Modo Serverless (Vercel)
    module.exports = app;
}