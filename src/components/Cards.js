import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what we can do for you!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/img-6.jpeg'
              text='Explore the benefits of our services for your business'
              label='Digital Media'
              path='/services'
            />
        </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpeg'
              text='Explore the benefits of our services for your business'
              label='Website Development'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Explore the benefits of our services for your business'
              label='Your Mom'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Explore the benefits of our services for your business'
              label='That&rsquo;s what she said'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='See what is going on around the industry'
              label='Articles'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpeg'
              text='Sign up to recieve our newsletter to keep you on the leading edge'
              label='Newsletter'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
