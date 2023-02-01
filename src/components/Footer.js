import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-link-items'>
            <a className='social-icon-link' href="https://instagram.com/mitchdrxms" target='blank'><i className="fa fa-instagram" aria-hidden="true"></i> </a>
            <a href="https://www.linkedin.com/in/mitch-dav/" target='blank' alt="Instagram"><i className="fa fa-linkedin" aria-hidden="true"></i> </a>
        </div>
        <div className='website-rights'>
        <small>Mitchell Davies © 2023</small>
        </div>
    </div>
  );
}

export default Footer