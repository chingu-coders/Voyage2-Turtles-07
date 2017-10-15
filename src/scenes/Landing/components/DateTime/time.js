import React, { Component } from 'react';
import './time.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeFormat: true,
      time: getTime(true)
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: getTime(this.state.timeFormat)
    });
  }
  
  render() {
    return (
        <div className="time">
            {this.state.time}
        </div>
    );
  }
}


function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let ampm = "";
  
  if (hours >= 12) {
    ampm = "p.m.";
    hours = hours - 12;
    hours = hours ? hours : 12;
  } else {
    ampm = "a.m.";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
}

export default Time