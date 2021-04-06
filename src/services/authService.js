// import api from "./index.js";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";

firebase.initializeApp(firebaseConfig);

// Efetua login
export const authLogin = async (inputEmail, inputPass) => {
  return firebase.auth().signInWithEmailAndPassword(inputEmail, inputPass);
};

// Registrar Usuario
export const registerUser = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

// Registrar Usuario
export const recoverPassword = async (email) => {
  return firebase.auth().sendPasswordResetEmail(email);
};
