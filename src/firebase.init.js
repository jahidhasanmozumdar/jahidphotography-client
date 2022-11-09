// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU_KR7q7AiAAQOE5cZ21gJ11sTB4rFAvs",
  authDomain: "jahid-photography.firebaseapp.com",
  projectId: "jahid-photography",
  storageBucket: "jahid-photography.appspot.com",
  messagingSenderId: "761295587960",
  appId: "1:761295587960:web:96577ceaaec12d6eacfb8d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
