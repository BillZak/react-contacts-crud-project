const initialState = {
     contacts :[]
};

const contactsReducer = ( state = initialState ,action) =>{
    switch(action.type){
        case "ADD_CONTACT":
        return {...state.contacts, contacts: [...state.contacts, action.payload]};

        default: return state;
    }
}

export default contactsReducer;