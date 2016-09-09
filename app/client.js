const React = require('react');
const { render } = require('react-dom')
const { Router, browserHistory } = require('react-router')
import { Provider } from 'react-redux'

import configureStore from './configureStore'
const routes = require('./routes');

const preloadedState = window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

render((
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>

),
  document.getElementById('root')
);
