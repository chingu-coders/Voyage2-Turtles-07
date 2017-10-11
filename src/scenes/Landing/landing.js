import React, { Component } from 'react';
import './landing.css';
import DateTime from './components/DateTime/container';

class Landing extends Component {
  render() {
    return (
      <section className="main-container">
          <DateTime />
          <aside className="side-menu">
          </aside>
      </section>
    );
  }
}

export default Landing;
