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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContact = void 0;
const contato_1 = require("../services/contato");
const createContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactData = req.body;
        const result = yield (0, contato_1.saveContact)(contactData);
        if (result && result.success) {
            return res.status(201).json({ message: 'Contato salvo com sucesso!', id: result.id });
        }
        else {
            return res.status(500).json({ message: 'Erro ao salvar contato.', error: result === null || result === void 0 ? void 0 : result.error });
        }
    }
    catch (error) {
        console.error('Erro no controller de contato:', error);
        return res.status(500).json({ message: 'Erro interno no servidor.', error });
    }
});
exports.createContact = createContact;
//# sourceMappingURL=contato.js.map