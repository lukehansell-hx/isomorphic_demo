const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./shared/presentation/App');
const Products = require('./availability/container/Products');
const Search = require('./search/presentation/Search');

module.exports = (
  <Route path="/" component={App}>
    <Route path="carparks" component={Products} />
    <IndexRoute component={Search} />
  </Route>
);
