import { Request, Response } from 'express';
import { saveContact } from '../services/contato';

export const createContact = async (req: Request, res: Response) => {
    try {
        const contactData = req.body;
        const result = await saveContact(contactData);

        if (result && result.success) { 
            return res.status(201).json({ message: 'Contato salvo com sucesso!', id: result.id });
        } else {
            return res.status(500).json({ message: 'Erro ao salvar contato.', error: result?.error });
        }
    } catch (error) {
        console.error('Erro no controller de contato:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.', error });
    }
};