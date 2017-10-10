import React, { Component } from 'react';
import './picture.css';

class Picture extends Component {
  render() {
    return (
        <div className="picture">
            <img src="http://lorempixel.com/600/400/" />
        </div>
    );
  }
}

export default Picture