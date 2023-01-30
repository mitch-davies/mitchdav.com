import React from 'react'
import '../App.css';
import './HomeContent.css';

function HomeContent() {
  return (
    <div className='home-section'>
      <div className='home-container'>
        {/* <img src="/images/bg.png" alt="background" /> */}
          <div className='row'>
            <h3>Hey! I'm Mitchell Davies👋</h3>
          </div>
          <div className='row'>
            <h1 className='h1-homepage'>I'm a product designer working around the world from <strong>Cape Town, South Africa</strong></h1>
          </div>
      </div>
    </div>
  
  )
};

export default HomeContent;