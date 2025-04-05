import express, { Request, Response } from 'express';
import cors from 'cors'; // Importa o middleware CORS
import contatosRouter from './contatos'; // Importa o roteador de contatos

const app = express();

// Habilitar CORS
app.use(cors({
  origin: '*', // Permite todas as origens (ajuste conforme necessário)
  allowedHeaders: ['Authorization', 'Content-Type'], // Permite o header Authorization
}));

const port = process.env.PORT || 3000;

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rota principal
app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel');
});

// Rota de ping
app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓');
});

// Rota de contatos
app.use('/contatos', contatosRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

export default app; // Exporta o app Express