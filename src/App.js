import React, { Fragment } from 'react'

import Routes from './Routes'
import { Header } from './components/Header';

import Global from './global'

function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Global />
    </Fragment>
  );
}

export default App;
