import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './index.css';

/*
  Allows you to switch between the debug GUI and the production GUI
*/
class ModeSwitch extends Component {
  render() {
    return (
      <div className={styles.ModeSwitchComponent}>
        <Link to={routes.PRODUCTION}>Production</Link>
        <Link to={routes.DEBUG}>Debug</Link>
      </div>
    );
  }
}

export default ModeSwitch;
