import React, { Component } from 'react';
import '../App.css';
import {Header} from '../component/FirstPageHeader';
import {FirstPageComponent} from '../component/FirstPageComponent';

export class FirstPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <FirstPageComponent />
        </div>
      </div>
    );
  }
}