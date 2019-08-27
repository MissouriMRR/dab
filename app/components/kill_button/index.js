import React, { Component } from 'react';
import { sendCommand } from '../../utils/tcp_client';
import styles from './index.css';

class KillButton extends Component {
  /*
    Sends out a kill command to kill all drones.
    Ideally, you should have someone with a physical killswitch for each drone
  */
  render() {
    return (
      <button
        type="button"
        className={styles.KillButton}
        onClick={() => sendCommand('kill')}
      >
        <h1>Kill</h1>
      </button>
    );
  }
}

export default KillButton;
