import React, { Component } from 'react';
import './ProductionGUI.css';

//Component imports
import ModeSwitchComponent from './ModeSwitchComponent';
import DroneStartComponent from './DroneStart';

/*
  Portion of the program to be used in the actual competition. Allows sending
  commands to start full autonomy features for each drone. Uses CSS grid for
  overall structure and flexbox for the start buttons.
*/
class ProductionGUI extends Component {
  /*
    Starts full drone autonomy features
    Params:
    Takes in the drone_name to specify which drone to start
  */
  startDrone = (drone_name) => {
    alert('Starting drone: ' + drone_name);
  }

  render () {
    return (
      <div className="ProductionGUI">
        <ModeSwitchComponent />
        <div className="DroneStartButtons">
          <DroneStartComponent 
            droneName="Raph"
            startCommand={() => {this.startDrone("Raph")}}
          />
          <DroneStartComponent 
            droneName="Leo"
            startCommand={() => {this.startDrone("Leo")}}
          />
          <DroneStartComponent 
            droneName="Mickey"
            startCommand={() => {this.startDrone("Mickey")}}
          />
          <DroneStartComponent 
            droneName="Donnie"
            startCommand={() => {this.startDrone("Donnie")}}
          />
        </div>
      </div>
    );
  }
}

export default ProductionGUI;