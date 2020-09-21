import React, { useState } from 'react';
import './ourServices.css';
// import { ourServiceFolder } from '../../configuration/Homepage/our_services_section';

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
        <article className='our-service-item col-lg-4 col-md-6 col-sm-6 col-12 mx-0'>
            <img src={src} alt={alt || heading} />
            <h3>{heading}</h3>
            <p>{text}</p>
        </article>
    )
}

export default function OurServices({ services = [] }) {
    return (
        <div className='our-services-container row'>
            {
                services.map(
                    (s, i) => <ServicesItem {...s} key={i} />
                )
            }
        </div>
    )
}
