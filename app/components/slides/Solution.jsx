var React = require('react');
var Slide = require('../Slide.jsx');

class ProblemSlide extends Slide {
	
	render() {
		return <div className="slide" id="solutionSlide">
			<div>
				<h1>Solution</h1>
				<span>Isomorphic Javascript</span>
			</div>
		</div>
	}
	
}

module.exports = ProblemSlide;