import { getAuth, signInWithCustomToken } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD7L5oq3v76YJ25qvemNZM9RG7LLbbNXwY",
    authDomain: "residence-back.firebaseapp.com",
    projectId: "residence-back",
    storageBucket: "residence-back.firebasestorage.app",
    messagingSenderId: "684115200207",
    appId: "1:684115200207:web:4cc429b4b332f38a3fcfba"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Substitua pelo customToken gerado no passo anterior
const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MzU3MTg5MCwiZXhwIjoxNzQzNTc1NDkwLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0ByZXNpZGVuY2UtYmFjay5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQHJlc2lkZW5jZS1iYWNrLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiSWNhOW9rNnJ2VWY0S0I2WE5XR3RtckJsUmtiMiJ9.PxVtoFGj6RVwSyhUW8g46HOIbVL0woHJgIY8YDkzHRtgXzvM8RfpG0EoR2kF3DyOXiZ0-2jN6NrlskX0BjHl4GkUymaAcNdsDUoXpUm1riopX65XXiGVp1y3MdD_sSB9c_HqIQP5WOGG2RV7Kb4ppul68qgMAwy06D4Rnuqid1fJzv1jN4MAtIMWyeMFrrJdBRrz8A2em_XrgFP4JPNLQzdxbIkZCrpBuBU2ZC1uuIxGh-PbLsod3R6BZdXwcFHTt2LWsWbxCoc3912aW6evBVl6timaaZMZ0-PCS94baTwYx_I9njSd1oAhX0PXsPrIrrlhOjpo6iFTBTbMzJQC6A";

// Faça login com o Custom Token para obter o ID Token
signInWithCustomToken(auth, customToken)
    .then((userCredential) => {
        userCredential.user.getIdToken().then((idToken) => {
            console.log("ID Token para usar no Insomnia:", idToken);
        });
    })
    .catch((error) => {
        console.error("Erro:", error);
    });