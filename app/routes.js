const React = require('react')
const { Route, IndexRoute } = require('react-router')
const App = require('./shared/presentation/App')
const Products = require('./availability/container/Products')
const InfoModal = require('./availability/container/InfoModal')
const Search = require('./search/container/Search')

module.exports = (
  <Route path="/" component={App}>
    <Route path="carparks" component={Products}>
      <Route path=":code/info" component={InfoModal} />
    </Route>
    <IndexRoute component={Search} />
  </Route>
)
