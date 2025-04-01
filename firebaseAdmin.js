import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'; // Adicione esta linha
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// Carrega as credenciais
const serviceAccount = JSON.parse(
  readFileSync(new URL('./service-account.json', import.meta.url))
);

// Inicializa o Admin SDK
const adminApp = initializeApp({
  credential: cert(serviceAccount)
});

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);