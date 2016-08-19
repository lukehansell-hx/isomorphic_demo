var React = require('react');
var Slide = require('../Slide');

class QuestionsSlide extends Slide {

	render() {
		return <div className="slide" id="questionsSlide">
			<div>
				<h1>Questions?</h1>
				<span>https://github.com/lukehansell-hx/isomorphic_demo</span>
			</div>
		</div>
	}

}

module.exports = QuestionsSlide;
