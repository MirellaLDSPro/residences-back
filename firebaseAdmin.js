import { initializeApp, cert } from 'firebase-admin/app';
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

export const adminDb = getFirestore(adminApp);