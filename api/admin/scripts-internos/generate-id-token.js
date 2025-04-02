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
const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MzYwMzg2NiwiZXhwIjoxNzQzNjA3NDY2LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1mYnN2Y0ByZXNpZGVuY2UtYmFjay5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWZic3ZjQHJlc2lkZW5jZS1iYWNrLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiSWNhOW9rNnJ2VWY0S0I2WE5XR3RtckJsUmtiMiJ9.T9m_bhQw3ZBrTV1xD1y3ZIgtrBZuR9gYUChoGucmn3zFnVVCTJ-NcwilHY8zDi-dQhszpGH9YbRZhLUxWAmcYWo7jMw9SyAp9Vkedb4w1u_RE544Vcv_Q0g4bpYoD-Zx9X5lBBPDAxoY41BUgZu95iAHszaBRVGa7WUP2ps4qOnExCleKDnUeqBRjao8sQzR2kk7VO_hd5NmzeiPWneR9trTkr6rHeca90P8H61ygf3c4D7jACBkISv9RGvdWFs0AD4rcy1bF4lv68CducgtfbRupixJjc3r7nugU0E9P8HZQ2luAeHQ05Ujk0PqEENap9e5r4oePNTKES190ypkJw";

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