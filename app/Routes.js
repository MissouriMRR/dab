import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import DebugGUI from './components/debug_GUI';
import ProductionGUI from './components/production_GUI';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.DEBUG} component={DebugGUI} />
      <Route path={routes.PRODUCTION} component={ProductionGUI} />
    </Switch>
  </App>
);
