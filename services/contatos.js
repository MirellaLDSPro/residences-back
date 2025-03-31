import { adminDb } from '../firebaseAdmin.js';

const criarLead = async (dados) => {
  try {
    const docRef = await adminDb.collection('leads').add({
      ...dados,
      createdAt: new Date().toISOString()
    });
    
    return { id: docRef.id, ...dados };
  } catch (error) {
    throw new Error(`Firestore error: ${error.message}`);
  }
};

export { criarLead };