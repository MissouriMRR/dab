import React, { Component } from 'react';
import './index.css';

//Import react-router components
import { Link } from "react-router-dom";

/*
  Allows you to switch between the debug GUI and the production GUI
*/
class ModeSwitch extends Component {
  render() {
    return (
      <div className="ModeSwitchComponent">
        <Link to="/production_mode">Production</Link>
        <Link to="/debug_mode">Debug</Link>
      </div>
    );
  }
}

export default ModeSwitch;