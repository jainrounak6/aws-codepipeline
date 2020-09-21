import React from 'react';
import WelcomeSection from './WelcomeSection';
import AboutUsSection from './AboutUsSection';
import OurServicesLarge from './OurServicesLarge';
import './index.css';

export default function Home() {
  return (
    <div id='home'>
        <WelcomeSection/>
        <AboutUsSection/>
        <OurServicesLarge/>
    </div>
  );
}