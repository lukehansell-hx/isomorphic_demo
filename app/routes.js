const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./shared/presentation/App');
import Products from './availability/container/Products';
const Search = require('./search/container/Search');

module.exports = (
  <Route path="/" component={App}>
    <Route path="carparks" component={Products} />
    <IndexRoute component={Search} />
  </Route>
);
