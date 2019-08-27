import React, { Component } from 'react';
import styles from './index.css';
import extStyles from '../extra_styles/index.css';
import Input from '../num_input';
import { sendCommand } from '../../utils/tcp_client';

class TakeoffLand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      takeoffAltitude: {
        value: '0'
      }
    };
  }

  handleChange = event => {
    // Grabs the direction and magnitude of that direction
    // IE. field = north_dir data=5 means 5m north
    const field = event.target.name;
    const data = Number(event.target.value);

    // Updates the value for the specific form
    this.setState({
      [field]: {
        value: data
      }
    });
  };

  /*
    Decreases a state value by one.

    Parameters:
      field: String value for the name of the state object
      value: The actual value of that state object
  */
  decrement = (field, value) => {
    const newVal = Number(value) - 1;

    this.setState({
      [field]: {
        value: newVal
      }
    });
  };

  /*
    Increases a state value by one.

    Parameters:
      field: String value for the name of the state object
      value: The actual value of that state object
  */
  increment = (field, value) => {
    const newVal = Number(value) + 1;

    this.setState({
      [field]: {
        value: newVal
      }
    });
  };

  handleTakeOff = event => {
    // TODO: Validate takeoff parameters and send takeoff command
    // Prevents page from reloading when sending the command
    event.preventDefault();

    // For now, just launches a default takeoff command
    sendCommand('takeoff');
  };

  handleLand = event => {
    // Prevents page from reloading when sending the command
    event.preventDefault();
    sendCommand('land');
  };

  render() {
    const { takeoffAltitude } = this.state;

    return (
      <div className={styles.TakeOffLandComponent}>
        <form className={extStyles.FormClass}>
          <Input
            type="number"
            name="takeoff_altitude"
            value={takeoffAltitude.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('takeoff_altitude', takeoffAltitude.value);
            }}
            plusClick={() => {
              this.increment('takeoff_altitude', takeoffAltitude.value);
            }}
          />
          <button
            className={styles.TakeoffButton}
            onClick={this.handleTakeOff}
            type="submit"
          >
            TakeOff <b>({takeoffAltitude.value}m)</b>
          </button>
          <button
            className={styles.LandButton}
            onClick={this.handleLand}
            type="submit"
          >
            Land
          </button>
        </form>
      </div>
    );
  }
}

export default TakeoffLand;
