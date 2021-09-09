import { createStore, compose, applyMiddleware } from "redux";
import contactsReducer from "../Reducers/contactsReducer";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import  thunk  from "redux-thunk"
import firebase from '../firebase/config'

const store = createStore(contactsReducer , compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(getFirestore)
))

export default store;