const { initializeApp } = require('firebase/app');
// Realtime Database
const { getDatabase, ref, push } = require('firebase/database');
// Firebase store
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY, //"AIzaSyD7L5oq3v76YJ25qvemNZM9RG7LLbbNXwY",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN, //"residence-back.firebaseapp.com",
    projectId: "residence-back",
    storageBucket: "residence-back.firebasestorage.app",
    messagingSenderId: "684115200207",
    appId: "1:684115200207:web:f6383a3b0616f8ef3fcfba"
  };

const app = initializeApp(firebaseConfig);

// Para Realtime Database
const database = getDatabase(app);
module.exports = { database, ref, push };

// OU para Firestore
const db = getFirestore(app);
module.exports = { db, collection, addDoc };