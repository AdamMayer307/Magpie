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
              src='images/img-9.jpeg'
              text='Our professional photographer will make your sites stand out'
              label='Digital Media'
              path='/website-services'
            />
            <CardItem
              src='images/img-7.jpeg'
              text='Build a website that will suit all your business needs'
              label='Website Development'
              path='/website-services'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='Increase traffic to your sites'
              label='SEO'
              path='/website-services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-5.jpeg'
              text='Explore the benefits of our services for your business'
              label='That&rsquo;s what she said'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpeg'
              text='See what is going on around the industry. LINKS TO RELEVENT ARTICLES'
              label='Articles'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpeg'
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
