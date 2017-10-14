import React, { Component } from 'react';
import './time.css';

class Time extends Component {
  render() {
    return (
        <div className="time">
            {getTime()}
        </div>
    );
  }
}

function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let ampm;
  
  if (hours > 12) {
    ampm = "p.m.";
    hours -= hours;
  } else {
    ampm = "a.m.";
  }
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
}

export default Time