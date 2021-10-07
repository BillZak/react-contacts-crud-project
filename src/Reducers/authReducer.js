const initial_state = {
    isAuth: false,
  };
  
  const auth_reducer = (state = initial_state, { type, payload }) => {
    switch (type) {
      case "SET_IS_AUTH":
        return { ...state, isAuth: payload };
  
      default:
        return state;
    }
  };
  
  export default auth_reducer;