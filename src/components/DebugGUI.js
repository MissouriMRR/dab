import React, { Component } from 'react';
import './DebugGUI.css'

//Component imports
import KillButton from './KillButton';
import MoveComponent from './MoveComponent'
import TakeOffLandComponent from './TakeOffLandComponent';
import YawComponent from './YawComponent';
import ModeSwitchComponent from './ModeSwitchComponent';
import DebugMainDisp from './DebugMainDisp';

/*
  The debug component is the menu for sending various commands to various
  drones. Uses CSS grid to organize components and media queries if the
  app gets shrunk down to a small windowsize.
*/
class DebugGUI extends Component {
  render () {
    return (
      <div className="DebugGUIComponent">
        <MoveComponent />

        <ModeSwitchComponent />
        <DebugMainDisp />
        <KillButton />

        <TakeOffLandComponent />
        <YawComponent />
      </div>
    );
  }
}

export default DebugGUI;