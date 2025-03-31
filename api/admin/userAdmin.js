const { auth, db } = require('./firebase-admin');

// Exemplo: Criar usuário
async function criarUsuario(email, senha) {
  try {
    const userRecord = await auth.createUser({
      email: email,
      password: senha
    });
    console.log('Usuário criado:', userRecord.uid);
    return userRecord;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}

// Exemplo: Ler dados do Firestore
async function getDados(colecao, documento) {
  const doc = await db.collection(colecao).doc(documento).get();
  if (!doc.exists) {
    throw new Error('Documento não encontrado');
  }
  return doc.data();
}