import React from 'react';
import './index.css'

/*
  Button component to start the drones
  Props:
    droneName: String variable containing the name of the drone.
    startCommand: The command that this will run upon being clicked
*/
const DroneStartComponent = (props) => {
  return (
    <div
      className="DroneStartComponent"
      id={props.droneName}
      onClick={props.startCommand}
      >
      <h1>Start {props.droneName}</h1>
    </div>
  );
}

export default DroneStartComponent;