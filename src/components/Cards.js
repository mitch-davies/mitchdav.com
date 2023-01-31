import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h2 className='cards-heading'>My work</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/crossfire.svg'
                    text='Atlantique'
                    // label='Work'
                    path='/work'
                    />
                     <CardItem
                    src='images/crossfire.svg'
                    text='Case study 2 and this is ala really long to see if it affects the overall card size at all'
                    // label='Work'
                    path='/work'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/favicon.svg'
                    text='This is also working wtf'
                    // label='Work'
                    path='/work'
                    />
                     <CardItem
                    src='images/favicon.svg'
                    text='This one works'
                    // label='Work'
                    path='/work'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;