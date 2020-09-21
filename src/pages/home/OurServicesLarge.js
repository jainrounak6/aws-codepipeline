import React, { useState } from 'react';
import { ourServiceFolder } from '../../configuration/Homepage/our_services_section';
import { ourServices } from '../../configuration/Homepage/our_services_section';
import './ourServicesLarge.css';

function ServicesItem({ image, alt, heading, text }) {
    const [src, setSrc] = useState(null);
    console.log("img name", image)
    // import('../../assets/images/our_services/'+image).
    import(`../../assets/images/our_services/${image}`)
        .then(img => {
            setSrc(img.default)
            console.log("img", img);
        })
        .catch(img => console.log("img", img)
        );

    return (
        <article className='our-service-item col-lg-5 col-md-5 col-sm-5 col-12'>
            <img src={src} alt={alt || heading} />
            <h3>{heading}</h3>
            <p>{text}</p>
        </article>
    )
}

function Services({ services = [] }) {
    return (
        <React.Fragment>
            {
                services.map(
                    (s, i) => <ServicesItem {...s} key={i} />
                )
            }
        </React.Fragment>
    );
}

function ServicesDescription() {
    return (
        <div className='section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10'>
            <h2>Services</h2>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            <div className='service-button'>
                <a className='btn-transparent rn-btn-dark' href='/'>
                    <span className='text'>
                        Request Custom Service
                    </span>
                </a>
            </div>
        </div>
    );
}

export default function OurServices() {
    return (
        <div className='our-services-large'>
            <div className='container'>
                <div className='our-services-large-container row'>
                    <div className='col-lg-4 col-12'>
                        <ServicesDescription />
                    </div>

                    <div className='row col-lg-8 col-12 mt_md--50'>
                        <Services services={ourServices} />
                    </div>
                </div>
            </div>
        </div>
    )
}
