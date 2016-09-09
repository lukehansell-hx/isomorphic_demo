const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./shared/presentation/App');
const Availability = require('./availability/container/Availability');
const Search = require('./search/presentation/Search');

module.exports = (
  <Route path="/" component={App}>
    <Route path="carparks" component={Availability} />
    <IndexRoute component={Search} />
  </Route>
);
