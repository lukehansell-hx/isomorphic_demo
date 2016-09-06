const React = require('react');
const { render } = require('react-dom')
const { Router, browserHistory } = require('react-router');
const routes = require('./routes');
const PreFetchedContext = require('./components/PreFetchedContext');

render((
  <PreFetchedContext>
    <Router routes={routes} history={browserHistory} />
  </PreFetchedContext>
),
  document.getElementById('root')
);
