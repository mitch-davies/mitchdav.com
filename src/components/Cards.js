import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h2>Check out some of my work</h2>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/images/favicon.svg'
                    text='Explore the hidden waterfall deep inside the Amazon jungle'
                    label='Work'
                    path='/work'
                    />
                     <CardItem
                    src='images/favicon.svg'
                    text='Case study 2 and this is ala really long to see if it affects the overall card size at all'
                    label='Work'
                    path='/work'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/images/favicon.svgg'
                    text='Explore the hidden waterfall deep inside the Amazon jungle'
                    label='Work'
                    path='/work'
                    />
                     <CardItem
                    src='images/favicon.svg'
                    text='Case study 2 and this is ala really long to see if it affects the overall card size at all'
                    label='Work'
                    path='/work'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Cards;