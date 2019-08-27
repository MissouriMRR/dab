import React, { Component } from 'react';
import styles from './index.css';

/*
Currently just displays text.
In the future should be able to do things like display video, flight
variables like altitude, and allow you to send custom terminal commands
to the drone.
*/
class DisplayWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome to the Drone Action Board'
    };
  }

  changeStatus = () => {
    this.setState({
      message: 'Changed'
    });
  };

  render() {
    const { message } = this.state;
    return (
      <div className={styles.DebugMainDisplay}>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default DisplayWindow;
