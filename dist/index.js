"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); // Importa o middleware CORS
const contatos_1 = __importDefault(require("./contatos")); // Importa o roteador de contatos
const app = (0, express_1.default)();
// Habilitar CORS
app.use((0, cors_1.default)({
    origin: '*', // Permite todas as origens (ajuste conforme necessário)
    allowedHeaders: ['Authorization', 'Content-Type'], // Permite o header Authorization
}));
const port = process.env.PORT || 3000;
// Middleware para interpretar JSON no corpo das requisições
app.use(express_1.default.json());
// Rota principal
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
// Rota de ping
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
// Rota de contatos
app.use('/contatos', contatos_1.default);
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
exports.default = app; // Exporta o app Express
//# sourceMappingURL=index.js.map