import React from 'react'

import Routes from './Routes'
import { Header } from './components/template/Header';


import Global from './global'

function App() {
  return (
    <div>
        <Header />
        <Routes />
        <Global />
    </div>
  );
}

export default App;
