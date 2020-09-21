import React, { useState } from 'react';
import icon_01 from '../../assets/images/our_services/icon-01.png';
/**
 * --------------------| WELCOME TEXT IN HOME PAGE |--------------------------------
 * 
 * description: type text to show as welcome text.
 * 
 * 
 * usage: 
 * #for sungle line text just type the text inside ""
 * eg: 
 *      const welcome_text = "this is will print in single line"
 * 
 * 
 * # for multiline text use array with each line's text, don't 
 * forget add comma at end of each 'line'
 * eg: 
 *      const welcome_text = ["first line", "second line",]
 */
const welcome_text = [
    'A digital',
    'agency.',
];




/**
 * --------------------| SERVICES |--------------------------------
 * 
 * description: type text to show as welcome text.
 */
const our_services_image_folder_name = 'our_services';
const our_services = [
    {
        image_name: `icon-01.png`,

        service_name: 'Business Stratagy',

        service_description: `There are many variations of pa
        ssages of Lorem Ipsum available, but the majority have
         suffered.`,
    }
    ,
    {
        image_name: `icon-02.png`,

        service_name: `Website Development`,

        service_description: `There are many variations of passages
         of Lorem Ipsum available, but the majority have suffered.`,
    }
    ,
    {
        image_name: `icon-03.png`,

        service_name: `Marketing & Reporting`,

        service_description: `There are many variations of passages
         of Lorem Ipsum available, but the majority have suffered.`,
    }
]





/*-----------------------------------|Do Not Edit|------------------------------------*/

// function Image() {
//     const [src, setSrc] = useState("");
//     import('../../assets/images/our_services/icon-01.png').
//     then(img => setSrc("img",img))
//     .catch(img => console.log("img",img));

//     return(
//         <img src={src} alt=""/>
//     );
// }
// import icon_01 from '../../assets/images/our_services/icon-01.png';

const welcomeText = welcome_text;
const ourServiceFolder = our_services_image_folder_name;
const ourServices = our_services.map(({ image_name, service_name, service_description }) => {
    return (
        {
            image: image_name,
            heading: service_name,
            text: service_description,
        }
    );
});


export {
    welcomeText,
    ourServiceFolder,
    ourServices,
}

