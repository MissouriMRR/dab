import React, { Component } from 'react';
import styles from './index.css';
import extStyles from '../extra_styles/index.css';
import Input from '../num_input';
import sendCommand from '../../utils/tcp_client';

/*
  Component for sending a yaw change command to the drone
  TODO: Restrict yaw range
*/
class YawButton extends Component {
  constructor(props) {
    super(props);

    // Yaw state has an angle measurement for yaw
    this.state = {
      yawAngle: {
        value: '0'
      }
    };
  }

  /*
    Handles updates to the form components

    Parameters:
      event: Event handler used for gradding the name and state value
             of the component that updates. Implicitly called.
  */
  handleChange = event => {
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
    const newVal = Number(value) - 10;

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
    const newVal = Number(value) + 10;

    this.setState({
      [field]: {
        value: newVal
      }
    });
  };

  /*
    Submits an angle to the drone that will set its new yaw value

    Parameters:
      event: Event handler that is implicitly passed in.
  */
  submitYaw = event => {
    // Prevents page from reloading when sending the command
    event.preventDefault();
    const { yawAngle } = this.state;

    alert(`Yaw changed by ${yawAngle.value}`);
    // TODO: Send yaw command to server
    sendCommand('yaw');
  };

  render() {
    const { yawAngle } = this.state;

    return (
      <div className={styles.YawComponent}>
        <h1>Yaw</h1>
        <h1>{yawAngle.value}&deg;</h1>
        <form className={extStyles.FormClass}>
          <Input
            type="number"
            name="yaw_angle"
            value={yawAngle.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('yaw_angle', yawAngle.value);
            }}
            plusClick={() => {
              this.increment('yaw_angle', yawAngle.value);
            }}
          />
          <button
            className={extStyles.SubmitButton}
            onClick={this.submitYaw}
            type="submit"
          >
            Change Yaw
          </button>
        </form>
      </div>
    );
  }
}

export default YawButton;
