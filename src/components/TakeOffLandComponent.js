import React, { Component } from 'react';
import './TakeOffLandComponent.css';
import './SubComponents.css'
import Input from './NumInput';

//import NumInput from './NumInput';

class TakeOffLandComponent extends Component {
  constructor(props) {
    super(props);

    //Add state component here
    this.state = {
      takeoff_altitude : {
        value: '0'
      }
    }
  }

  handleChange = (event) => {
    //Grabs the direction and magnitude of that direction
    //IE. field = north_dir data=5 means 5m north
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
    const new_val = Number(value) - 1;

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
    const new_val = Number(value) + 1;

    this.setState({
      [field] : {
        value : new_val
      }
    });
  }

  handleTakeOff = (event) => {
    //TODO: Validate takeoff parameters and send takeoff command
    //Prevents page from reloading when sending the command
    event.preventDefault();

  }

  handleLand = (event) => {
    //TODO: Make the drone land
    //Prevents page from reloading when sending the command
    event.preventDefault();
  }

  render () {
    return (
      <div className="TakeOffLandComponent">
        <form className="FormClass">
          <Input
            type="number"
            name="takeoff_altitude"
            value={this.state.takeoff_altitude.value}
            changeHandler={this.handleChange}
            minusClick={() => {
              this.decrement("takeoff_altitude",
                              this.state.takeoff_altitude.value)
            }}
            plusClick={() => {
              this.increment("takeoff_altitude",
                              this.state.takeoff_altitude.value)
            }}
          />
          <button className="TakeoffButton"
            onClick={this.handleTakeOff}
          >
            TakeOff <b>({this.state.takeoff_altitude.value}m)</b>
          </button>
          <button className="LandButton"
            onClick={this.handleLand}
          >
            Land
          </button>
        </form>
      </div>
    );
  }
}

export default TakeOffLandComponent;