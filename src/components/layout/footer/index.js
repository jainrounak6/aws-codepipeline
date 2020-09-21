import React from 'react';
import './footer.css'

function ContactUs(){
  return(
    <div className='contact-us'>
        <span>Ready To Do This</span>
        <h2>
          Let's get <br/> to work
        </h2>
        <a href='#'>
          contact us
        </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className='row align-items-end row--0'>
        <div className='col-lg-6 left'>

        </div>

        <div className='col-lg-6 right'>
            <div className='overlay'/>
        </div>
      </div>
    </footer>
  );
}

