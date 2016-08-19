var React = require('react');
var Router = require('react-router');
var { RouteHandler, Route } = Router;
var resolveHash = require('when/keys').all;

var DeckController = require('./controllers/DeckController');

class App extends React.Component {

	render() {
		return <RouteHandler {...this.props} />
	}

}

var routes = ( <Route path="/" handler={App}>
	<Route name="deck" path="slides/:slideNum" handler={DeckController}></Route>
</Route> );

module.exports = function(url, options, callback){
  var router = Router.create({location: url, routes});
  router.run( (Handler, state) => {
    var promises = state.routes.filter( (route) => {
      return route.handler.fetchData;
    }).reduce( (promises, route) => {
      if(route.name && route.handler.fetchData) {
        promises[route.name] = route.handler.fetchData(route.name, state.params, state.query, options);
      }
      return promises;
    }, {});

    resolveHash(promises).then( (data) => {
      callback( null, data, Handler );
    }, (data) => {
      callback( data );
    });
  });
};
