import React, { Component } from 'react';
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
      north_dir: {
        value: '0'
      },
      east_dir: {
        value: '0'
      },
      down_dir: {
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

    alert(
      'Move command with north: ' +
        this.state.north_dir.value +
        'm east: ' +
        this.state.east_dir.value +
        'm down: ' +
        this.state.down_dir.value +
        'm'
    );
  };

  render() {
    return (
      <div className={styles.MoveButton}>
        <h1 className={extStyles.ComponentTitle}>Move (m)</h1>
        <form className={extStyles.FormClass}>
          <h1>North</h1>
          <Input
            type="number"
            name="north_dir"
            value={this.state.north_dir.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('north_dir', this.state.north_dir.value);
            }}
            plusClick={() => {
              this.increment('north_dir', this.state.north_dir.value);
            }}
          />
          <h1>East</h1>
          <Input
            type="number"
            name="east_dir"
            value={this.state.east_dir.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('east_dir', this.state.east_dir.value);
            }}
            plusClick={() => {
              this.increment('east_dir', this.state.east_dir.value);
            }}
          />
          <h1>Down</h1>
          <Input
            type="number"
            name="down_dir"
            value={this.state.down_dir.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement('down_dir', this.state.down_dir.value);
            }}
            plusClick={() => {
              this.increment('down_dir', this.state.down_dir.value);
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
