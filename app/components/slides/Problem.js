var React = require('react');
var Slide = require('../Slide');

class ProblemSlide extends Slide {

	constructor(props) {
		super(props);

		this.state = {
			tweenStates: 4,
			currentTween: 1
		};
	}

	render() {
		var classes = ['slide'];
		for(var i = 0; i < this.state.currentTween; i++){
			classes.push('tween'+i);
		}
		var classSet = classes.join(' ');

		return <div className={classSet} id="problemSlide" onClick={this.onTween.bind(this)}>
			<h1>Problem</h1>
			<div className="horizontal" >
				<span id="server">Server Side</span><span id="client">Client Side</span>
			</div>
		</div>
	}

}

module.exports = ProblemSlide;
