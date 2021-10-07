import React from 'react';
import ContactList from '../components/ContactList'
import ContactForm from '../components/ContactForm'



const Home = () => {
    return (
        <>
            <ContactForm />
                <h1 style={{fontSize:'40px',marginLeft:'500px',marginTop:'50px'}}>Added Contacts</h1>
            <ContactList />
        </>
    );
}

export default Home;

