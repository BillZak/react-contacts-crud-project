import React from 'react';
import Contact from './Contact'
import { connect } from 'react-redux'

const ContactList = ({contacts,deleteContact,editContact}) => {
    const contactList = contacts.map((item) =>{
        return(
          <Contact contact={item} deleteContact={deleteContact} editContact={editContact}/>
        )
})


    return (
        <div>
            {contactList}
        </div>
    );
}

const mapStateToProps = function(state){
    return{
        contacts: state.contact.contacts
    }
}

export default connect(mapStateToProps)(ContactList);
