import { createStore } from "redux";
import contactsReducer from "../Reducers/contactsReducer";

const store = createStore(contactsReducer)

export default store;