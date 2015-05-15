var React = require('react');
var Slide = require('../Slide.jsx');

class CodeSlide extends Slide {
	
	render() {
		return <div className="slide" id="codeSlide">
			<div>
				<h1>Code</h1>
			</div>
		</div>
	}
	
}

module.exports = CodeSlide;