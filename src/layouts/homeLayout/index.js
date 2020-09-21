import React, { Fragment } from 'react';
import { Header, Footer } from '../../components/layout';
import { HomeRouter } from '../../routers';
import './index.css';


export default function HomeLayout() {
  return (
    <Fragment>
      <Header />
      <main>
        <HomeRouter />
      </main>
      <Footer />
    </Fragment>
  );
}

