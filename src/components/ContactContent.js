import React from 'react'
import './ContactContent.css'

function ContactContent() {
  return (
    <div className='page-background'>
            <h1 className="contact">Give me a shout, I'd love to connect with you!</h1>
            <div className='contact-parent'>
        <div className='contact-card'>
            <div className="card-title">
                <h2 className='contact-heading'>Email</h2>
                <a className='contact-links' href='mailto:mdavies259@gmail.com' target="blank">mdavies259@gmail.com</a>
                <a className='contact-links' href='mailto:mdavies259@gmail.com' target="blank">
                <i class="fa-light fa-circle-envelope"></i> 
                </a>
            </div>
        </div>
        <div className='contact-card'>
            <div className="card-title">
                <h2 className='contact-heading'>LinkedIn</h2>
                <a className='contact-links' href='https://linkedin.com/in/mitch-dav' target="blank">linkedin.com/in/mitch-dav</a>
                {/* <a className='contact-links' href='https://linkedin.com/in/mitch-dav' target="blank"><i class="fa-brands fa-linkedin"></i> </a> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default ContactContent