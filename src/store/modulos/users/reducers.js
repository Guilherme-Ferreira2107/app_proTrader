import { createStore } from "redux";

const INITIAL_STATE = {
  token: "",
  nome: "",
  email: "",
  saldoFinal: 0,
  saldoInicial: 0,
  currentUserFirebase: [],
};

function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CURRENT_FIREBASE":
      return {
        ...state,
        currentUserFirebase: action.payload,
      };
    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "UPDATE_NOME":
      return {
        ...state,
        nome: action.payload,
      };
    case "UPDATE_SALDO_INICIAL":
      return {
        ...state,
        saldoInicial: action.payload,
      };
    case "UPDATE_SALDO_FINAL":
      return {
        ...state,
        saldoFinal: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(users);

export default store;
