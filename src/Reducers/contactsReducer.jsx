const initialState = {
     contacts :[]
};

const contactsReducer = ( state = initialState ,action) =>{
    switch(action.type){
        case "ADD_CONTACT":
        return {...state.contacts, contacts: [...state.contacts, action.payload]};
        case "DELETE_CONTACT":
            const savedContacts = state.contacts.filter(
                (contact) => {
                return contact.id !== action.payload;
            })
            return {...state,contacts: savedContacts}
        case "EDIT_CONTACT":
        return {...state,contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact),
        }
        default: return state;
    }
}

export default contactsReducer;