import React from 'react';
import ButtonG from '../components/ButtonG';
import { IntroTitle } from '../components/Intro/IntroTitle';
// import AboutUs from '../components/AboutUs';
export default function Home() {
  return (
    <div className='container'>
    <IntroTitle />
    {/* <AboutUs /> */}
    <ButtonG />
    </div>
  );
}
