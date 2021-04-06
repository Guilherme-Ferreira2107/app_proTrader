export function getCurrent(data) {
  return {
    type: "CURRENT_FIREBASE",
    payload: data,
  };
}

export function updateToken(data) {
  return {
    type: "UPDATE_TOKEN",
    payload: data,
  };
}

export function updateEmail(email) {
  return {
    type: "UPDATE_EMAIL",
    payload: email,
  };
}

export function updateNome(data) {
  return {
    type: "UPDATE_NOME",
    payload: data,
  };
}

export function updateSaldoInicial(data) {
  return {
    type: "UPDATE_SALDO_INICIAL",
    payload: data,
  };
}

export function updateSaldoFinal(data) {
  return {
    type: "@user/UPDATE_SALDO_FINAL",
    payload: data,
  };
}
