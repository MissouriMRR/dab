import React, { Component } from 'react';
import styles from './index.css';
import ModeSwitch from '../mode_switch';
import DroneSelector from '../drone_selector';
import RoutineSelector from '../routine_selector';
// import DroneStart from '../drone_start';

/*
  Portion of the program to be used in the actual competition. Allows sending
  commands to start full autonomy features for each drone. Uses CSS grid for
  overall structure and flexbox for the start buttons.
*/
class ProductionGUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drones: [
        { name: 'Raph', routine: null, selected: false },
        { name: 'Mike', routine: null, selected: false },
        { name: 'Leo', routine: null, selected: false },
        { name: 'Don', routine: null, selected: false }
      ]
    };
  }

  /*
    Starts full drone autonomy features
    Params:
    Takes in the drone_name to specify which drone to start
  */
  startDrone = droneName => {
    console.log(droneName);
    // TODO: Start drone with routine
  };

  toggleDroneState = (droneName, index) => {
    // const { drones } = this.state;
    // let selectedDrone = null;

    /*
    for (let i = 0; i < drones.length(); i += 1) {
      if (droneName === drones[i]) {
        selectedDrone = droneName;
      }
    }

    */

    // TODO: Setstate based on chosen drone
    this.setState(state => {
      const drones = state.map((drone, i) => {
        if (index === i) {
          drones.selected = true;
          return;
        }
        return drone;
      });

      return {
        drones
      };
    });
  };

  render() {
    const { drones, routineState } = this.state;

    return (
      <div className={styles.ProductionGUI}>
        <ModeSwitch />
        <DroneSelector drones={drones} toggle={this.toggleDroneState} />
        <RoutineSelector routine={routineState} />
      </div>
    );
  }
}

export default ProductionGUI;
