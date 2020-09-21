import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainRouter } from '../../routers';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
