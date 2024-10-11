import types from "./action";
const initialState = {
  newTheme: {
    colors: {
      primary: "#FF9933",
      secondary: "#FFFFFF",
      accent: "#138808",
      background: "#F4F4F4",
      text: "#000080",
      gradient: "linear-gradient(90deg, #FF9933, #FFFFFF, #138808)",
    },
  },
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
