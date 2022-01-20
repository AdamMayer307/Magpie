import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout some of our recent projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-5.jpeg" 
                        text="Explore what we have to offer. We are here to get your business out to the world."
                        label='Services'
                        path='/services'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src="images/img-4.jpeg" 
                        text="See our previous projects here."
                        label='Projects'
                        path='/projects'
                        />                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-2.jpeg" 
                        text="Explore what we have to offer"
                        label='Services'
                        path='/services'
                        />
                        </ul>
                        <ul className="cards__items">
                        <CardItem 
                        src="images/img-1.jpeg" 
                        text="See our previous projects here"
                        label='Projects'
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>         
        </div>
    )
}

export default Cards;