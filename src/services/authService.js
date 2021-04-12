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

// Recuperar dados localstorage
export const recuperarDadosLocais = () => {
  const response = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
  return response;
};

// Atualizar dados localstorage
export const atualizarDadosLocais = async (data) => {
  const response = localStorage.setItem(
    "@wallet-app/dadosUsuario",
    JSON.stringify(data)
  );
  return response;
};
