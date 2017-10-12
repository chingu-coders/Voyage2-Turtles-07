import React, { Component } from 'react';
import './menu.css';
import weatherIcon from './assets/sun.png';
import todoIcon from './assets/padnote.png';
import infoIcon from './assets/info.png';

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
          <img className="weather-icon" src={weatherIcon} />
          <img className="todo-icon" src={todoIcon} />
          <img className="info-icon" src={infoIcon} />
      </div>
    );
  }
}

export default SideMenu;
