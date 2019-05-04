import React, { Component } from 'react';
import './index.css';

class KillButton extends Component {
  /*
    Sends out a kill command to kill all drones.
    Ideally, you should have someone with a physical killswitch for each drone
  */
  killCommand = () => {
    alert('Kill command sent!');
  }

  render () {
    return (
      <div
        className="KillButton"
        onClick={() => this.killCommand()}
      >
          <h1>Kill</h1>
      </div>
    );
  }
}

export default KillButton;