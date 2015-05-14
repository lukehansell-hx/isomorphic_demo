var React = require('react');
var Slide = require('../Slide.jsx');

class DemoSlide extends Slide {
	
	render() {
		return <div className="slide" id="demoSlide">
			<div>
				<h1>Demo</h1>
				<span><a href="http://localhost:5000/carparks/LGW?from=2015-06-16%2012%3A00&to=2015-06-20%2012%3A00"
					target="_blank">WebApp Availability</a></span>
			</div>
		</div>
	}
	
}

module.exports = DemoSlide;