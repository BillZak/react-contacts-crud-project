
import ContactForm from './components/ContactForm'

import React, { Component } from 'react';
import ContactList from './components/ContactList';

class App extends Component {

  render() {
  
    return (
      <>
         <ContactForm />
         <ContactList />
      </>
    );
  }
}

export default App;

