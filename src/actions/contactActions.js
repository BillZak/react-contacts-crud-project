import { useStore } from "react-redux";
import { getFirestore } from "redux-firestore";

export const addContact = ( newContact )=>{
    //newContact.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
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

export const editContact = ( updatedContact ) =>{
    return{
        type: "EDIT_CONTACT",
        payload: updatedContact
    }
}

export const getAllContacts = () =>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('contacts').onSnapshot((snapshot)=>{
            let contacts = [];
            snapshot.forEach((doc)=>{
                contacts.push(doc.data())
            })
            dispatch({
                type: "SET_ALL_CONTACTS",
                payload: contacts
            })
        })
    }
}