import express, { Request, Response } from 'express';
import { db } from './firebase';
import { createContact } from './controllers/contato';

const router = express.Router();

// Rota para listar todos os contatos
router.get('/', async (_req: Request, res: Response) => {
    
    const authorizationHeader = _req.headers.authorization;

    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    try {
        // Busca todos os documentos da coleção "contatos"
        const contatosSnapshot = await db.collection('contatos').get();

        // Converte os documentos em um array de objetos
        const contatos = contatosSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));

        // Retorna os contatos como resposta
        res.status(200).json(contatos);
    } catch (error) {
        console.error('Erro ao buscar contatos:', error);
        res.status(500).json({ error: 'Erro ao buscar contatos' });
    }
});

// Rota para cadastrar um novo contato
router.post('/', createContact);

export default router;