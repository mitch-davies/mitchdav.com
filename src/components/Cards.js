import React from 'react'
import './Cards.css'

function Cards() {
  return (
    <div>
  <div className="project-card-container">
        <div className="project-card" data-aos="fade-up">
            <img src="/images/prodigy.png" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">Prodigy Finance</h1>
                <p className="project-description">Refreshed the mobile app repayment journey, creating a user-friendly solution for international students repaying their loans. Our streamlined, task-oriented process significantly reduced cognitive load, enhancing user comprehension and completion. This redesign doubled repayment rates via mobile, making loan repayment simpler and faster from anywhere globally.</p>
            </div>
        </div>
        <div className="project-card" data-aos="fade-up">
            <img src="/images/crossfire.png" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">Crossroads Health</h1>
                <p className="project-description">Managing the execution of product strategy and crafted the core design for our breakthrough product, Crossfire, which has enabled company growth transforming operations from 3 analysts to an efficient team of over 70+.<br/><br/>As of now, Crossfire has streamlined the resolution of $100+ million in credit balances in US healthcare. Additionally, it equips businesses and clients with sophisticated reporting tools for comprehensive analysis and data sharing, keeping them in the loop with throughput volumes, trends, and productivity.</p>
            </div>
        </div>
        <div className="project-card" data-aos="fade-up">
            <img src="/images/offerzen.png" alt="project display" className="project-image"/>
            <div className="project-info">
                <h1 className="work-title">OfferZen</h1>
                <p className="project-description">Steered comprehensive discovery and design for the Marketplace Matching Squad, consistently delivering impactful improvements to recruitment sourcing and candidate-company matching rates.<br/><br/>Key accomplishments include revamping the search UI, incorporating innovative search parameters, and facilitating early alignment on remote policy preferences in the hiring process. These advancements not only boosted marketplace efficiency but also revolutionized the recruitment experience for our customers.</p>
            </div>
        </div>
    </div>
  </div>
  );
};

export default Cards;