import React from 'react';
import ErrorBoundry from '../ErrorBoundry';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';




function Home() {
    return (
        <>
        <ErrorBoundry>
            <HeroSection />
            <Cards />
        </ErrorBoundry>
        </>
    )
}


export default Home;