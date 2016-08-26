const React = require('react');
const { render } = require('react-dom')
const { Router, browserHistory } = require('react-router');
const routes = require('./routes');

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('root')
);
