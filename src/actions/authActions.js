export const registerUserWithEmail = (email,password) => {
    return(dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{});
    };
};


export const loginWIthEmail = (email, password,replace)  => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          replace("/home");
        })
        .catch((e) => {
          console.log(e);
        });
    };
  };


  export const logout = (replace) => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          replace("/login");
        });
    };
  };
  
  export const setIsAuth = (isAuth) => {
    return {
      type: "SET_IS_AUTH",
      payload: isAuth,
    };
  };