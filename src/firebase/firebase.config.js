// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbbZKmMug4ughleR-MSIAm75T-0iTb6f4",
  authDomain: "ec-bazzar-auth.firebaseapp.com",
  projectId: "ec-bazzar-auth",
  storageBucket: "ec-bazzar-auth.appspot.com",
  messagingSenderId: "136532812712",
  appId: "1:136532812712:web:69f897be8a1b6bae3f739d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;