import React from 'react';
import Common from './Common';
import web from '../src/images/homeimage.png'
const About = () => {
  return (
    <>
    <Common 
    name='Welcome to About page of'
    subtitle='All you need to know About us! '
    imgsrc={web} visit='/contact' btname='Contact Now'
    />
    </>
  );
}

export default About;
