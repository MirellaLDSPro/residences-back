const contatosService = require('../services/contatos');

class ContatosController {
    async listar(req, res) {
        try {
            const contatos = contatosService.listar();
            res.json(contatos);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno' });
        }
    }

    async criar(req, res) {
        try {
            if (!req.body.nome || !req.body.telefone) {
                return res.status(400).json({ error: 'Dados incompletos' });
            }

            const novoContato = contatosService.criar(req.body);
            res.status(201).json(novoContato);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar contato' });
        }
    }
}

module.exports = new ContatosController();