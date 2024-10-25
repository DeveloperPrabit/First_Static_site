// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOFwPBeIIcwNgJhn9U_ewiO1FbKPbz528",
  authDomain: "chatting-app-4d154.firebaseapp.com",
  databaseURL: "https://chatting-app-4d154-default-rtdb.firebaseio.com",
  projectId: "chatting-app-4d154",
  storageBucket: "chatting-app-4d154.appspot.com",
  messagingSenderId: "1063585135350",
  appId: "1:1063585135350:web:ddd11c62c1bd3858970ad7",
  measurementId: "G-CVW2G649FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export auth for use in login and signup forms
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification };

