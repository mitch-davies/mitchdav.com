import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
  <div className="project-card-container">
        <div className="project-card" data-aos="fade-up">
            <img src="files/work-prodigy.svg" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">Prodigy Finance</h1>
                <p className="project-description">I led the redesign of the mobile app repayment flow, making it easier for customers to repay their student loans from anywhere in the world.<br/><br/>Simplifying each step allowed users to focus on a single task at a time, which reduced cognitive load and improved user understanding. In doing so we more than doubled repayment rates through the mobile repayment channel.</p>
            </div>
        </div>
        <div className="project-card" data-aos="fade-up">
            <img src="/files/work-crossfire.svg" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">Crossroads Health</h1>
                <p className="project-description">Working closely with the founders, I defined the product strategy and led the design and build of the company’s flagship product, Crossfire. It’s unlocked operational speed and efficiency at scale - enabling the business to grow from 3 analysts working manual processes on spreadsheets, to a team of 70+ analysts.<br/><br/>To date Crossfire has enabled the resolution of over $100 million in credit balances in the US healthcare system. In addition, Crossfire provides built in reporting to the business and its clients, helping them to analyse, understand and share information on throughput volumes, trends and productivity.</p>
            </div>
        </div>
        <div className="project-card" data-aos="fade-up">
            <img src="/files/work-offerzen.svg" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">OfferZen</h1>
                <p className="project-description">Leading end to end discovery and design for the marketplace matching squad, I’ve completed numerous projects resulting in marked improvements in recruitment sourcing efficiency and the rate of matching between companies and candidates.<br/><br/>Notable missions include overhauling the search UI, introducing new search criteria and enabling companies and candidates to align on remote policy preferences early on in the hiring process.</p>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Cards;