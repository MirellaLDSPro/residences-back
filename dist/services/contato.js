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
exports.saveContact = void 0;
const firebase_1 = require("../firebase");
const saveContact = (contact) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield firebase_1.db.collection('contatos').add(contact);
        return { success: true, id: docRef.id };
    }
    catch (error) {
        console.error('Erro ao salvar contato:', error);
        return { success: false, error };
    }
});
exports.saveContact = saveContact;
//# sourceMappingURL=contato.js.map