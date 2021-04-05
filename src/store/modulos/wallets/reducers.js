import produce from "immer";

const initial = {
  wallet: [],
};

export default function listaToDo(state = initial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@wallet/walletData":
        draft.wallet = action?.payload ?? "";
        break;
      default:
        draft = initial;
        break;
    }
  });
}
