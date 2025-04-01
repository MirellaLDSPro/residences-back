import express from 'express';
import { criar } from '../controllers/contatos.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API de contatos funcionando!' });
});

router.post('/', criar);

// Cria o servidor Express
const app = express();
app.use(express.json());
app.use('/api/contatos', router);

// Inicia o servidor apenas quando executado diretamente
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Teste em: http://localhost:${PORT}/api/contatos`);
  });
}

export default app;