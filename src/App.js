import React from 'react';
import {MainRoute} from './Routes/MainRoute'
import {BrowserRouter, Link} from 'react-router-dom'
import {Provider, connect} from 'unistore/react'
import {store} from './store'

function App() {
  return (
      <MainRoute />
  );
}

export default App;