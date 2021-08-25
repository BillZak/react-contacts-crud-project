export const addContact = ( newContact )=>{
    newContact.id = Math.random().toString();
    return{
        type: "ADD_CONTACT",
        payload: newContact,
    }
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