import { db } from '../firebase';

export interface Contact {
    name: string;
    telefone: string;
    email: string;
    retorno: string;
    mensagem: string;
}

export const saveContact = async (contact: Contact) => {
    try {
        const docRef = await db.collection('contatos').add(contact);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Erro ao salvar contato:', error);
        return { success: false, error };
    }
};