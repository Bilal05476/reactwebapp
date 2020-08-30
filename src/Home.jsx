import React from 'react';
import web from '../src/images/aboutimage.png';
import Common from './Common';
const Home = () => {
    return (
        <>
        <Common
        name='Grow your business with '
        subtitle='We are the team of talented developer making website!'
        imgsrc={web} visit='/service' btname='Get Started'
        />
        
        </>
      );
}

export default Home;