import React, { Fragment } from 'react';
import OurServices from './OurServices';
import './welcomeSection.css';

import { welcomeText, ourServices } from '../../configuration/Homepage/our_services_section';


function MainHeading({ text }) {
    let finalText = text;

    if (Array.isArray(text)) {
        finalText = text.map((t, i) => {
            return (
                <Fragment key={i}>
                    {t}
                    {i !== (text.length - 1) && <br />}
                </Fragment>
            )
        })
    }

    return (
        <h1 className='theme-gradient'>
            {finalText}
        </h1>
    );
}

export default function WelcomeSection() {
    return (
        <section id='welcome-section'>
            <div className='overlay'/>
            <div className='container'>
                <MainHeading text={welcomeText} />
                <OurServices services={ourServices} />
            </div>
        </section>
    );
}