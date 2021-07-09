import Contact from './components/Contact';
import ContactForm from './components/ContactForm'

import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={ contacts :[]}
  }
  handleAddContact = (newContact) => {
    this.setState({ 
        contacts: [...this.state.contacts,newContact] 
    })
  }


  render() {
   
    const contacts = this.state.contacts.map((contacts,index) =>{
            return(
              <Contact contact={contacts} index={index}/>
            )
    })



    return (
      <>
         <ContactForm addContact={this.handleAddContact}/>
         {contacts}
      </>
    );
  }
}

export default App;

