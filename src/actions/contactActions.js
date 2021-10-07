

export const addContact = ( newContact )=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('contacts')
        .add({...newContact, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((docs)=>{
            console.log(docs);
        });
      };

}

export const deleteContact = ( contactId ) =>{
    return(dispatch,state, {getFirestore})=>{
        getFirestore().collection('contacts').doc(contactId).delete()
        .then(()=>{})
      }
}

export const editContact = ( updatedContact ) =>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('contacts').doc(updatedContact.id).update(updatedContact)
        .then(
            ()=> {
                console.log("Successfuly updated")
            }
        )
        .catch(
            (error)=> {
                console.error("Remove Contacts", error);
            }
        )  
    }
}

export const getAllContacts = () =>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('contacts')
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot)=>{
            let contacts = [];
            snapshot.forEach((doc)=>{
                contacts.push({...doc.data(), id:doc.id})
            })
            dispatch({
                type: "SET_ALL_CONTACTS",
                payload: contacts
            })
        })
    }
}