import React, { Component } from 'react';
import '../App.css';
import {Header} from '../component/SecondPageHeader';
import {SecondPageComponent} from '../component/SecondPageComponent';
import { NavigationTitle } from '../component/NavigationTitle';
import {Footer} from '../component/Footer'

export class SecondPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <NavigationTitle />
          <SecondPageComponent />
        </div>
        <Footer />
      </div>
    );
  }
}