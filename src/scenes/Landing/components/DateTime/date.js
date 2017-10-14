import React, { Component } from 'react';
import './date.css';

class DateComponent extends Component {
  render() {
    return (
        <div className="date">
            {getDate()}
        </div>
    );
  }
}

function getDate() {
  let today = new Date();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dd = today.getDate();
  let mm = today.getMonth();
  let yyyy = today.getFullYear();

  return dd + " " + months[mm] + " " + yyyy;
}

export default DateComponent