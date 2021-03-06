
import ContactForm from './components/ContactForm'

import React, { Component } from 'react';
import ContactList from './components/ContactList';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ contacts :[]}
  }
  handleAddContact = (newContact) => {
    newContact.id = Math.random().toString();
    this.setState({ 
        contacts: [...this.state.contacts,newContact] 
    })
  }

  handleDeleteContact = (contactId) =>{
     const savedContacts = this.state.contacts.filter(contact => contact.id !== contactId);

     this.setState({contacts: savedContacts})
  }

  handleEditContact = (updatedContact) =>{
    this.setState({
      contacts: this.state.contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact),
    })
  };


  render() {
  
    return (
      <>
         <ContactForm addContact={this.handleAddContact}/>
         <ContactList contacts= {this.state.contacts} deleteContact= {this.handleDeleteContact}
          editContact={this.handleEditContact}/>
      </>
    );
  }
}

export default App;

