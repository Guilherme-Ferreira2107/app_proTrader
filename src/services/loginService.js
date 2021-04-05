// import api from "./index.js";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig.js";

firebase.initializeApp(firebaseConfig);

// Efetua login
export const authLogin = async (inputEmail, inputPass) => {
  return firebase.auth().signInWithEmailAndPassword(inputEmail, inputPass);
};
