import React, { Component } from 'react';
import './index.css';
//React router components
import { Switch, HashRouter as Router, Route } from "react-router-dom";
//Imports two menu components, a debug menu and production menu
import DebugGUI from '../debug_GUI';
import ProductionGUI from '../production_GUI';
/*
  TODO: Finish the extra features and documentation
  - Redesign move component
  - Allow sending commands to a specific drone
  - Document everything, in the code and in a readme
  - Mobile scaling
    - Better CSS scaling
    - Restrict scaling perhaps for now?
    - Dark mode
  - Eventually: CSS overhaul
*/

/*
  Component for the whole app, using react router to switch between menus
  Defaults to the debug menu for now. Change the component prop on the
  exact path route to select a default menu component
*/
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
          <Route exact path="/" component={DebugGUI} />
          <Route path="/production_mode" component={ProductionGUI} />
          <Route path="/debug_mode" component={DebugGUI} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;