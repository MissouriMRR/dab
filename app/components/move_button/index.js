import React, { Component } from 'react';
import { sendCommand } from '../../utils/tcp_client';
import styles from './index.css';
import extStyles from '../extra_styles/index.css';

import Input from '../num_input';

/*
  MoveComponent takes in values from the user to send a movement command
  to the drones.
  TODO: Implement input validation for movement controls
          - Restrict the range
  TODO: Add drone chooser
*/
class MoveComponent extends Component {
  constructor(props) {
    super(props);
    /*
      State is an object of directions with the value being an integer
      of that direction. Current supports north, east, and down direction.
    */
    this.state = {
      northDirection: {
        value: '0'
      },
      eastDirection: {
        value: '0'
      },
      downDirection: {
        value: '0'
      }
    };
  }

  /*
    Updates the state value every time that a form input is modified
    
    Parameters:
      event: Used to grab the name prop of the modified form input.
             Implicitly passed in.
  */
  handleChange = event => {
    const field = event.target.name;
    const data = Number(event.target.value);

    // Updates the specific direction based on what textbox is modified
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

  /*
    Takes in the user's movement directions and then send that command
    to a chosen drone.

    Parameters:
      event: Used for event handling. Implicitly passed in
  */
  handleSubmit = event => {
    // Prevents page from reloading when sending the command
    event.preventDefault();

    // TODO: Customize movement actions based on user choice
    sendCommand('move');
  };

  render() {
    const { northDirection, eastDirection, downDirection } = this.state;

    return (
      <div className={styles.MoveButton}>
        <h1 className={extStyles.ComponentTitle}>Move (m)</h1>
        <form className={extStyles.FormClass}>
          <h1>North</h1>
          <Input
            type="number"
            name="northDirection"
            value={northDirection.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('northDirection', northDirection.value);
            }}
            plusClick={() => {
              this.increment('northDirection', northDirection.value);
            }}
          />
          <h1>East</h1>
          <Input
            type="number"
            name="eastDirection"
            value={eastDirection.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('eastDirection', eastDirection.value);
            }}
            plusClick={() => {
              this.increment('eastDirection', eastDirection.value);
            }}
          />
          <h1>Down</h1>
          <Input
            type="number"
            name="downDirection"
            value={downDirection.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('downDirection', downDirection.value);
            }}
            plusClick={() => {
              this.increment('downDirection', downDirection.value);
            }}
          />
          <button
            className={extStyles.SubmitButton}
            onClick={this.handleSubmit}
            type="submit"
          >
            Send Command
          </button>
        </form>
      </div>
    );
  }
}

export default MoveComponent;
