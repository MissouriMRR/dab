import React, { Component } from 'react';
import './index.css';

//Component imports
import Input from '../num_input';

/*
  Component for sending a yaw change command to the drone
  TODO: Restrict yaw range
*/
class YawButton extends Component {
  constructor(props) {
    super (props);

    //Yaw state has an angle measurement for yaw
    this.state = {
      yaw_angle : {
        value : '0'
      }
    };
  }

  /*
    Handles updates to the form components

    Parameters:
      event: Event handler used for gradding the name and state value
             of the component that updates. Implicitly called.
  */
  handleChange = (event) => {
    const field = event.target.name;
    const data = Number(event.target.value);

    //Updates the value for the specific form
    this.setState({
      [field] : {
        value : data
      }
    });
  }

  /*
    Decreases a state value by one.

    Parameters:
      field: String value for the name of the state object
      value: The actual value of that state object
  */
  decrement = (field, value) => {
    const new_val = Number(value) - 10;

    this.setState({
      [field] : {
        value : new_val
      }
    });
  }

  /*
    Increases a state value by one.

    Parameters:
      field: String value for the name of the state object
      value: The actual value of that state object
  */
  increment = (field, value) => {
    const new_val = Number(value) + 10;

    this.setState({
      [field] : {
        value : new_val
      }
    });
  }

  /*
    Submits an angle to the drone that will set its new yaw value

    Parameters:
      event: Event handler that is implicitly passed in.
  */
  submitYaw = (event) => {
    //Prevents page from reloading when sending the command
    event.preventDefault();

    alert('Yaw changed by ' + this.state.yaw_angle.value);
  }

  render () {
    return (
     <div className="YawComponent">
        <h1>Yaw</h1>
        <h1>{this.state.yaw_angle.value}&deg;</h1>
        <form className="FormClass">
          <Input
            type="number"
            name="yaw_angle"
            value={this.state.yaw_angle.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement("yaw_angle",
                            this.state.yaw_angle.value)
            }}
            plusClick={() => {
              this.increment("yaw_angle", this.state.yaw_angle.value)
            }}
          />
          <button className="SubmitButton" onClick={this.submitYaw}>
            Change Yaw
          </button>
        </form>
      </div>
    );
  }
}

export default YawButton;