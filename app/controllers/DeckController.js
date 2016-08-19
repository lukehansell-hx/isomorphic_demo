var React = require('react');
var Deck = require('../components/deck');

var IntoSlide = require('../components/slides/Intro');
var ProblemSlide = require('../components/slides/Problem');
var SolutionSlide = require('../components/slides/Solution');
var DemoSlide = require('../components/slides/Demo');
var TechSlide = require('../components/slides/Tech');
var QuestionsSlide = require('../components/slides/Questions');
var CodeSlide = require('../components/slides/Code');

class DeckController extends React.Component {

	constructor(props, context) {
		super(props);
	}

	componentDidMount(){
		if(window) window.onkeypress = this.handleClick.bind(this);
	}

	render() {
		var newSlideNum = this.props.params.slideNum*1 + 1;
		var nextSlideHref = this.context.router.makeHref('deck', {slideNum: newSlideNum});
		return <Deck onClick={this.handleClick.bind(this)}
			onKeyPress={this.handleClick.bind(this)}
			selected={this.props.params.slideNum}>
			<IntoSlide />
			<ProblemSlide />
			<SolutionSlide />
			<DemoSlide />
			<CodeSlide />
			<TechSlide />
			<QuestionsSlide />
		</Deck>
	}

	handleClick(e) {
		if (e.target.tagName.toLowerCase() === "a") return;
		e.preventDefault();
		var newSlideNum = this.props.params.slideNum*1 + 1;
		return this.context.router.transitionTo('deck', {slideNum: newSlideNum});
	}
}

DeckController.contextTypes = {
	router: React.PropTypes.func
}

module.exports = DeckController;
