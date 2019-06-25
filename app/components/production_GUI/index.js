import React, { Component } from 'react';
import styles from './index.css';
import ModeSwitch from '../mode_switch';
import DroneStart from '../drone_start';

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
  startDrone = droneName => {
    alert(`Starting drone: ${droneName}`);
  };

  render() {
    return (
      <div className={styles.ProductionGUI}>
        <ModeSwitch />
        <div className={styles.DroneStartButtons}>
          <DroneStart
            droneName="Raph"
            startCommand={() => {
              this.startDrone('Raph');
            }}
          />
          <DroneStart
            droneName="Leo"
            startCommand={() => {
              this.startDrone('Leo');
            }}
          />
          <DroneStart
            droneName="Mickey"
            startCommand={() => {
              this.startDrone('Mickey');
            }}
          />
          <DroneStart
            droneName="Donnie"
            startCommand={() => {
              this.startDrone('Donnie');
            }}
          />
        </div>
      </div>
    );
  }
}

export default ProductionGUI;
