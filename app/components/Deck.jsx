var React = require('react');
var { RouteHandler } = require('react-router');

class Deck extends React.Component {
	
	constructor(props, context) {
		super(props);
	}
	
	render() {
		var selected = (this.props.selected >= this.props.children.length) ? this.props.children.length-1 : this.props.selected
		var selectedChild = this.props.children[selected];
		
		return <div onClick={this.props.onClick} className="deck">
			{selectedChild}
		</div>	
	}

}

module.exports = Deck;