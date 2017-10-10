import React, { Component } from 'react';
import './landing.css';
import Date from './components/DateTime/date';
import Picture from './components/DateTime/picture';

class Landing extends Component {
  render() {
    return (
      <section className="main-container">
          <Picture />
          <Date />
          <div className="date">
          </div>
          <aside className="side-menu">
          </aside>
      </section>
    );
  }
}

export default Landing;
