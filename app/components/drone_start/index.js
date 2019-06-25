import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

/*
  Button component to start the drones
  Props:
    droneName: String variable containing the name of the drone.
    startCommand: The command that this will run upon being clicked

    //FIXME: Get CSS IDs working with imported stylesheets and props
*/
const DroneStart = props => {
  const { startCommand, droneName } = props;

  return (
    <button
      className={styles.DroneStartComponent}
      id={styles.Leo}
      onClick={startCommand}
      type="button"
    >
      <h1>Start {droneName}</h1>
    </button>
  );
};

DroneStart.propTypes = {
  startCommand: PropTypes.func.isRequired,
  droneName: PropTypes.string.isRequired
};

export default DroneStart;
