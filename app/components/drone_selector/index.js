import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
  Component does not have its own state. Instead the state is
  managed one level up. Onclicks will toggle the state.

  TODO: Write a map function that takes in the drone_toggle
  object and maps out toggle buttons for each drone
*/
class DroneSelector extends Component {
  render() {
    const { drones, toggle } = this.props;

    const droneList = drones.map((drone, index) => {
      return (
        <button
          type="button"
          onClick={() => {
            toggle(drone.name, index);
          }}
        >
          <h1>{drone.name}</h1>
        </button>
      );
    });

    return <div>{droneList}</div>;
  }
}

DroneSelector.propTypes = {
  toggle: PropTypes.func.isRequired,
  drones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      routine: PropTypes.string.isRequired
    })
  ).isRequired
};

/* 
  The drones prop does not necessarily have to be an array if the team is only
  using a single drone depending on the competition

DroneSelector.defaultProps = {
  drones: []
};

*/

export default DroneSelector;
