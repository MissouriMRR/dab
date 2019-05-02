import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
  Used for running tests on react.
  Current unused until we create a testing suite sometime towards the future
*/
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
