import React from 'react';
import MainRoute from './Routes/MainRoute'
import {BrowserRouter, Link} from 'react-router-dom'
import {Provider, connect} from 'unistore/react'
import {store} from './store'
import { render } from 'react-dom';

class App extends React.Component{
  render(){
    return(
      <MainRoute />
    )
  }

}

export default App;