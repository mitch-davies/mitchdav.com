import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button';
import './Navbar.css';

function Navbar() {
const [click, setClick] = useState(false);


const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>MD</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='files/Mitchell Davies - Product Designer - CV.pdf' target='_blank' className='nav-links fix-stroke' onClick={closeMobileMenu}>Resume</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links fix-stroke' onClick={closeMobileMenu}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;