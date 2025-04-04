"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebase_1 = require("./firebase");
const contato_1 = require("./controllers/contato");
const router = express_1.default.Router();
// Rota para listar todos os contatos
router.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Lê o header "Authorization"
    // const authorizationHeader = _req.headers.authorization;
    // console.log(`Token recebido: ${authorizationHeader}`);
    // if (!authorizationHeader) {
    //     return res.status(401).json({ error: 'Authorization header is missing' });
    // }
    try {
        // Busca todos os documentos da coleção "contatos"
        const contatosSnapshot = yield firebase_1.db.collection('contatos').get();
        // Converte os documentos em um array de objetos
        const contatos = contatosSnapshot.docs.map(doc => (Object.assign({ id: doc.id }, doc.data())));
        // Retorna os contatos como resposta
        res.status(200).json(contatos);
    }
    catch (error) {
        console.error('Erro ao buscar contatos:', error);
        res.status(500).json({ error: 'Erro ao buscar contatos' });
    }
}));
// Rota para cadastrar um novo contato
router.post('/', contato_1.createContact);
exports.default = router;
//# sourceMappingURL=contatos.js.map