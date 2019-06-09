import React from 'react';
import styles from './index.css';

/*
  Button component to start the drones
  Props:
    droneName: String variable containing the name of the drone.
    startCommand: The command that this will run upon being clicked

    //FIXME: Get CSS IDs working with imported stylesheets and props
*/
const DroneStart = props => {
  return (
    <div
      className={styles.DroneStartComponent}
      id={styles.Leo}
      onClick={props.startCommand}
    >
      <h1>Start {props.droneName}</h1>
    </div>
  );
};

export default DroneStart;
