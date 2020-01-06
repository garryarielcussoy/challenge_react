import React, { Component } from 'react';
import './App.css';
import {FirstPage} from './page/FirstPage';
import {SecondPage} from './page/SecondPage';
import {ContactPage} from './page/ContactPage';

class App extends Component {
  render() {
    // Uncomment one of the following page and comment the others to see the page in action
    return (
      <div className="App">
        {/* <FirstPage /> */}
        {/* <SecondPage /> */}
        <ContactPage />
      </div>
    );
  }
}

export default App;