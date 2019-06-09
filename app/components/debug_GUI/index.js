import React, { Component } from 'react';
import styles from './index.css';
import MoveComponent from '../move_button';
import ModeSwitch from '../mode_switch';
import DisplayWindow from '../display_window';
import KillButton from '../kill_button';
import TakeoffLand from '../takeoff_land';
import YawButton from '../yaw_button';

/*
  The debug component is the menu for sending various commands to various
  drones. Uses CSS grid to organize components and media queries if the
  app gets shrunk down to a small windowsize.
*/
class DebugGUI extends Component {
  render() {
    return (
      <div className={styles.DebugGUI}>
        <MoveComponent />

        <ModeSwitch />
        <DisplayWindow />
        <KillButton />

        <TakeoffLand />
        <YawButton />
      </div>
    );
  }
}

export default DebugGUI;
