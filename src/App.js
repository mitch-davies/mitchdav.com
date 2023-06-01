import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      offset: 120, // adjust this value to change when the animation starts
      duration: 750,
      easing: 'ease-in-out',
      once: true, // add this option to make sure animations only play once
      mirror: false,
    });
}, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          {/* <Route path='/about' element={<About/>} /> */}
          {/* <Route path='/work' element={<Work/>} /> */}
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;