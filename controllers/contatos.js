import { criarLead } from '../services/contatos.js';

const criar = async (req, res) => {
  try {
    // Validação robusta dos campos
    const { nome, email, telefone } = req.body;
    
    if (!nome || !email) {
      return res.status(400).json({ error: 'Nome e email são obrigatórios' });
    }

    // Formata os dados para o Firestore
    const dadosLead = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone ? telefone.trim() : null, // Trata campo opcional
      data: new Date().toISOString()
    };

    const novoLead = await criarLead(dadosLead);
    res.status(201).json(novoLead);
    
  } catch (error) {
    console.error('Erro no controller:', error);
    res.status(500).json({ error: error.message });
  }
};

export { criar };