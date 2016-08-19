var React = require('react');
var Slide = require('../Slide');

class TechSlide extends Slide {

	render() {
		return <div className="slide" id="techSlide">
			<div>
				<h1>Tech</h1>
				<div className="horizontal">
					<img src="/images/react-logo.png" height="150" width="150" alt="react logo" />
					<img src="/images/browserify_logo.png" height="150" alt="browserify logo" />
				</div>
				<div className="horizontal">
					<img src="/images/express.png" height="150" alt="express logo" />
				</div>
				<div className="horizontal">
					<img src="/images/gulp.png" height="150" alt="gulp logo" />
				</div>
			</div>
		</div>
	}

}

module.exports = TechSlide;
