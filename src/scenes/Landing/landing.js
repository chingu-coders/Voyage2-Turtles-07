import React, { Component } from 'react';
import './landing.css';
import DateTime from './components/DateTime/container';
import SideMenu from './components/SideMenu/menu'

class Landing extends Component {
  render() {
    return (
      <section className="main-container">
          <DateTime />
          <SideMenu />
      </section>
    );
  }
}

export default Landing;
