import React, { Component } from 'react';
import establishConnection from '../../utils/tcp_client';
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
      message: ''
    };
  }

  componentDidMount() {
    establishConnection();
  }

  changeStatus = () => {
    this.setState({
      message: 'Changed'
    });
  };

  render() {
    return (
      <div className={styles.DebugMainDisplay}>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default DisplayWindow;
