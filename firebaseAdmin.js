import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth'; // Adicione esta linha
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

// Carrega as credenciais
// const serviceAccount = JSON.parse(
//   readFileSync(new URL('./service-account.json', import.meta.url))
// );

// Inicializa o Admin SDK
const adminApp = initializeApp({
  credential: cert({
    type: process.env.FIREBASE_ADMIN_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_ADMIN_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    client_email: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
    client_id: process.env.CLIENTE_ID,
    client_id: "103836585568240066799",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40residence-back.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  })
});

export const adminAuth = getAuth(adminApp);
export const adminDb = getFirestore(adminApp);