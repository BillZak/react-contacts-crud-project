export const addContact = ( newContact )=>{
    return{
        type: "ADD_CONTACT",
        payload: newContact,
    }
}