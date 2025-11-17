import React from 'react';
import Hero from '../Hero/Hero';
import ChargingYourEv from '../ChargingYourEv/ChargingYourEv';


const HomePage = () => {
    return (
        <div>
            <Hero />
            {/* <WhyChooseSection /> */}
            <ChargingYourEv/>
        </div>
    );
};

export default HomePage;