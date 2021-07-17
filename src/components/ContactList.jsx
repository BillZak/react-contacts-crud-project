import React from 'react';
import Contact from './Contact'

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

export default ContactList;
