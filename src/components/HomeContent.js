import React from 'react'
import '../App.css';
import './HomeContent.css';
import Cards from './Cards';

function HomeContent() {
  return (
    <>
<section className='home-section'>
    <div className='home-container'>
        {/* <img src="/images/bg.png" alt="background" /> */}
        <div className='row'>
            <h3>Hey! I'm Mitchell Davies 👋</h3>
        </div>
        <div className='row'>
        <h1 className='h1-homepage'>I'm a product designer working around the world from <span className="highlight">Cape Town, South Africa</span></h1>

        </div>
    </div>
</section>

<section className="work-section">
<h1 className='h1-work'>Some work highlights ✨</h1>
    < Cards />
    {/* 
    <div className="work-bounding">
        <div className="row work-feature">
            <div className="work-bounding">
                <img className="work-image" src="/images/print-prodigy-png.png" alt="portfolio" />
                <div className="row">
                    <h1 className="work-title">PF.</h1>
                </div>
            </div>
            <div>
                <p>I led the redesign of the mobile app repayment flow, making it easier for ns from anywhere in the customers to repay their student loan world.<br/><br/>Simplifying each step allowed users to focus on a single task at a time, which reduced cognitive load and improved user understanding. In doing so we significantly increased repayment rates through our mobile repayment channels.</p>
            </div>
        </div>
    </div> 
    */}
</section>

    </>
  )
};

export default HomeContent;