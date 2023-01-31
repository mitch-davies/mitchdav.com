import React from 'react'
import '../../App.css'
import ContactContent from '../ContactContent';
import Footer from '../Footer'

export default function Contact() {
    return (
        <>
        <div className='contact-background'>
            <h1 className="contact">Give me a shout, I'd love to connect with you!</h1>
        </div>
        <ContactContent />
        <Footer />
        </>
    );
}