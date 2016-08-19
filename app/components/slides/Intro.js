var React = require('react');
var Slide = require('../Slide');

class IntroSlide extends Slide {

	render() {
		return <div className="slide" id="introSlide">
			<img src="/images/evolution.svg" height="216" width="606"/>
			<h1>Refactor POD</h1>
			<span className="subtitle">the new WebApp</span>
			<span>a tech demo</span>
		</div>
	}

}

module.exports = IntroSlide;
