import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import contactsReducer from "../Reducers/contactsReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { firebaseReducer,getFirebase, reactReduxFirebase } from "react-redux-firebase";
import  thunk  from "redux-thunk"
import firebase from '../firebase/config'
import authReducer from "../Reducers/authReducer";

let reducers = combineReducers({
    contact: contactsReducer,
    firebase: firebaseReducer,
    auth: authReducer,
})

const store = createStore(reducers, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default store;