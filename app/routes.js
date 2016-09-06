const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./components/App');
const Availability = require('./components/Availability');
const Search = require('./components/Search');

module.exports = (
  <Route path="/" component={App}>
    <Route path="carparks" component={Availability} />
    <IndexRoute component={Search} />
  </Route>
);
