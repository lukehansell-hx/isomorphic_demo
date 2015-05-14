var React = require('react');

class Slide extends React.Component {
	
	constructor(props, context) {
		super(props);
		
		this.state = {
			tweenStates: 0,
			currentTween: 1
		}
	}
	
	onTween(e) {
		if(!this.state.tweenStates) return;
		if(this.state.currentTween >= this.state.tweenStates) return;
		e.preventDefault();
		e.stopPropagation();
		this.setState({currentTween: this.state.currentTween+1});
	}
	
}

Slide.defaultProps

module.exports = Slide;