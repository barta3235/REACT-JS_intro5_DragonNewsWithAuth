// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlAzcKFa5sqviz7kxtrIrCe3qtnbtnPWE",
  authDomain: "m9-m52-dragonnews-auth.firebaseapp.com",
  projectId: "m9-m52-dragonnews-auth",
  storageBucket: "m9-m52-dragonnews-auth.appspot.com",
  messagingSenderId: "165166535997",
  appId: "1:165166535997:web:d5f3f049af06d1cb5e2154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth

