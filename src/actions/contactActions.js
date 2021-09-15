import { getFirestore } from "redux-firestore";

export const addContact = ( newContact )=>{
    //newContact.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('users')
        .add(newContact).then((docs)=>{
            console.log(docs);
        });
      };

    //return{
    //    type: "ADD_CONTACT",
     //   payload: newContact,
    //}
}

export const deleteContact = ( contactId ) =>{
    return{
        type: "DELETE_CONTACT",
        payload: contactId
    }
}

export const editContact = ( updatedUser ) =>{
    return{
        type: "EDIT_CONTACT",
        payload: updatedUser
    }
}