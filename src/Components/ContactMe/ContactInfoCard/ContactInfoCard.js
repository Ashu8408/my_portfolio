import React from 'react'

import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div>
        <div className='contact-img'>
        <div>
            <div className='contact-icon'>
            <a href="mailto:ashjnavj@example.com" target="_blank" rel="noopener noreferrer">
                    <img src = './assets/images/email.png' alt="Email"/>
                    </a>
                </div>

                <div className='contact-icon'>
                <a href="https://www.linkedin.com/in/ashu-jaiswal/" target="_blank" rel="noopener noreferrer">
                    <img src = './assets/images/linkedinblue.png' alt='LinkedIn'/>
                    </a>
                </div>

            <div className='contact-icon'>
            <a href="https://github.com/Ashu8408" target="_blank" rel="noopener noreferrer">
                    <img src='./assets/images/github.png' alt='GitHub' />
                    </a>
                </div>
                
                <div className='contact-icon'>
                <a href="https://wa.me/7784087872/" target="_blank" rel="noopener noreferrer">
                    <img src = './assets/images/whatsapp.png' alt='WhatsApp'/>
                    </a>
                </div>
                

                </div>
                </div>
      
    </div>
  )
}

export default ContactInfoCard
