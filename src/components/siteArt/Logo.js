import React from 'react';
import devopsArray from '../../assets/images/logo/devops_array.png';
import './logo.css';


export default function Logo() {
  return (
    <span className='logo'>
      <img src={devopsArray} alt='Devops Array logo'/>
    </span>
  );
}

