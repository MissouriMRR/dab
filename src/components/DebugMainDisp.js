import React, { Component } from 'react';
import './DebugMainDisp.css'

/*
Currently just displays text.
In the future should be able to do things like display video, flight
variables like altitude, and allow you to send custom terminal commands
to the drone.
*/
class DebugMainDisp extends Component {
  render () {
    return (
      <div className="DebugMainDisplay">
        <h1>Welcome to the debug mode.</h1>
      </div>
    );
  }
}

export default DebugMainDisp;