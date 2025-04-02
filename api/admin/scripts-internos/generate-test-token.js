import express from 'express';
import { adminAuth } from '../../../firebaseAdmin.js'; // Importe seu adminAuth

const app = express();
app.use(express.json());

// Rota para gerar um token de teste
app.post('/generate-test-token', async (req, res) => {
  try {
    // 1. Crie um usuário de teste (ou use um existente)
    const uid = "Ica9ok6rvUf4KB6XNWGtmrBlRkb2"; // UID único
    const email = `contato.mlds@gmail.com`;
    const password = "321456";

    // const user = await adminAuth.createUser({
    //   uid,
    //   email,
    //   password,
    // });

    // 2. Gere um ID Token customizado para esse usuário
    const customToken = await adminAuth.createCustomToken(uid);

    // 3. (Opcional) Se precisar de um ID Token real, simule o login no SDK do cliente
    // (Veja a observação abaixo sobre ambientes de teste)

    res.json({
      uid,
      email,
      customToken, // Use no frontend com signInWithCustomToken()
      // AVISO: Não use customToken diretamente no Insomnia! (leia abaixo)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));