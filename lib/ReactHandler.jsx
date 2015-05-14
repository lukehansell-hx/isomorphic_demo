var React = require('react');

module.exports = function(data, Handler){
	return React.renderToString(<Handler data={data} />);
}