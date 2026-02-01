// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD95EoiQBfyaTGNW728kozMsW4oDNrvobg",
  authDomain: "fixtime-a0fe3.firebaseapp.com",
  projectId: "fixtime-a0fe3",
  storageBucket: "fixtime-a0fe3.firebasestorage.app",
  messagingSenderId: "781384893100",
  appId: "1:781384893100:web:47cdb1a62e4ea99f819509"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Inicializar Auth

export const auth= getAuth(app);