import produce from "immer";

const initial = {
  useData: [],
};

export default function listaToDo(state = initial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@user/userData":
        draft.user = action?.payload ?? "";
        break;
      default:
        draft = initial;
        break;
    }
  });
}
