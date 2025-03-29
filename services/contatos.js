// Simulando um "banco de dados" em memória
let contatos = [
    { id: 1, nome: "João", telefone: "61-9999-9999" },
    { id: 2, nome: "Maria", telefone: "61-8888-8888" }
];

class ContatosService {
    listar() {
        return contatos;
    }

    criar(dadosContato) {
        const novoContato = {
            id: contatos.length + 1,
            ...dadosContato
        };
        contatos.push(novoContato);
        return novoContato;
    }

    // buscarPorId(id) { ... }
    // atualizar(id, dados) { ... }
    // deletar(id) { ... }
}

module.exports = new ContatosService();