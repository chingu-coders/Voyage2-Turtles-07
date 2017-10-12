import React, { Component } from 'react';
import './menu.css';
import weatherIcon from './assets/sun.png';
import todoIcon from './assets/padnote.png';
import infoIcon from './assets/info.png';

class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
          <div className="weather-icon">
            <img src={weatherIcon} />
            <label>86ºF/30ºC</label>
          </div>
          <div className="todo-icon">
            <img src={todoIcon} />
            <label>To-Do List</label>
          </div>
          <div className="info-icon">
            <img src={infoIcon} />
            <label>Info</label>
          </div>
      </div>
    );
  }
}

export default SideMenu;
