import React from 'react';
import HeaderNav from './HeaderNav';
import { Logo } from '../../siteArt';
import './index.css';


export default function Header() {
  return (
    <header>
      <Logo />
      <HeaderNav />
    </header>
  );
}