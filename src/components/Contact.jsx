import React from 'react';

const Contact = ({contact,index}) => {
    return (
        <div className='contact' key={index}>
            <h3>Name: {contact.name}</h3>
            <h3>Number: {contact.number}</h3>
            <h3>Location: {contact.location}</h3><hr/>
        </div>
    );
}

export default Contact;
