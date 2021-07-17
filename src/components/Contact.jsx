import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import EditContactForm from './EditContactForm';
import './Contact.css'
import React, {useState} from 'react';


const Contact = ({contact,deleteContact,editContact}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) =>{
        e.preventDefault();
        deleteContact(contact.id);
    }

    return (
        <>
        <div className='contact' key={contact.id}>
            <h3>Name: {contact.name}</h3>
            <h3>Number: {contact.number}</h3>
            <h3>Location: {contact.location}</h3>
            <Button variant="primary" onClick={handleShow} className='btn-primary'>Edit</Button>{' '}
            <Button variant="danger" onClick={handleDelete} className='btn-secondary'>Delete</Button>{' '}
        </div>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title style={{fontSize:'50px', marginTop:'20px', textAlign:'center',
            color:'rgb(98, 51, 160)',fontWeight:'bold'}}>Edit Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <EditContactForm  contact={contact} editContact={editContact} closeModal={handleClose} />
            </Modal.Body>
        </Modal>
        </>
    );
}

export default Contact;
