import { db, collection, addDoc } from '../firebaseConfig.js';

const criarLead = async (dados) => {
  try {
    // Remove campos undefined/nulos
    const dadosLimpos = Object.fromEntries(
      Object.entries(dados).filter(([_, value]) => value !== undefined && value !== null)
    );

    const docRef = await addDoc(collection(db, 'leads'), dadosLimpos);
    
    return { 
      id: docRef.id,
      ...dadosLimpos
    };
    
  } catch (error) {
    console.error('Erro no Firestore:', error);
    throw new Error(`Erro ao salvar lead: ${error.message}`);
  }
};

export { criarLead };