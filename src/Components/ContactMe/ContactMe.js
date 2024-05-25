import React, { useState } from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'


const ContactMe = () => {
    const [showContacts, setShowContacts] = useState(false);

    const toggleContacts = () => {
        setShowContacts(!showContacts);
    };

    return (
        <section className='contact-container'>
            <button onClick={toggleContacts}>Reach Me</button>
            {showContacts && <ContactInfoCard/>}
        </section>
    );
};


export default ContactMe;
