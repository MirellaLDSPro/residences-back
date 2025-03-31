import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "residence-back",
    storageBucket: "residence-back.firebasestorage.app",
    messagingSenderId: "684115200207",
    appId: "1:684115200207:web:f6383a3b0616f8ef3fcfba"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db }; // Exporte apenas o necessário para operações client-side