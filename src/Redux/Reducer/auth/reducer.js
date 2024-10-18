import types from "./action";
const initialState = {
  newTheme: {},
};
export default function reducer(state = initialState, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case types.SET_NEW_THEME:
      localStorage.setItem("newTheme", JSON.stringify(action.newTheme));
      return {
        ...state,
        newTheme: action.newTheme,
      };
    default:
      return state;
  }
}
