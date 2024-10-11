const actions = {
  SET_NEW_THEME: "auth/SET_NEW_THEME",

  setTheme: (newTheme) => (dispatch) =>
    dispatch({
      type: actions.SET_NEW_THEME,
      newTheme,
    }),
};

export default actions;
