const initialState = {
     contacts :[
        {name: 'Bill', number: '0299837737', location: 'kasoa'},
        {name: 'Zack', number: '8488484848', location: 'accra'}
    ]
};
var contactsReducer = ( state = initialState,action) =>{
    switch(action.type){
        case "SET_CONTACTS":
        return {...state, username:action.payload};

        default: return state;
    }
}

export default contactsReducer;