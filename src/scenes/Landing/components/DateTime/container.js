import React, { Component } from 'react';
import './container.css';
import Date from "./date";
import Time from "./time";
import Picture from "./picture";

class DateTime extends Component {
  render() {
    return (
        <div className="date-time-container">
            <div className="time-picture-container">
                <Time />
                <Picture />
            </div>
            <Date />
        </div>
    );
  }
}

export default DateTime