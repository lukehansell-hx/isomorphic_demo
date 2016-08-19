var React = require('react');
var Router = require('react-router');
var appRouter = require('./app');

window.app = {
  initialize: function() {
    appRouter( Router.HistoryLocation, {}, (err, data, Handler) => {
      React.render(<Handler data={data} />, document.getElementById('root'));
    });
  }
};

window.app.initialize();
