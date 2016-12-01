const React = require('react')
const { Component } = React

const { connect } = require('react-redux')

const EditiableItineraryComponent = require('../presentation/EditableItinerary');

import { fetchProducts } from '../action/products'


class EditableItinerary extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      editing: props.editing,
      from: props.from,
      to: props.to
    }
  }

  render() {
    const { agent } = this.props
    const { editing, from, to } = this.state

    return <EditiableItineraryComponent
      from={from}
      to={to}
      agent={agent}
      location={this.props.location}
      editing={editing}
      onChange={(e) => this.handleChange(e)}
      onEditButtonClick={e => this.handleEditButtonClick(e)}
      onSubmit={e => this.handleSaveButtonClick(e)}
      editHref={this.context.router.createHref({
        pathname: '/carparks',
        query: {
          from: this.state.from,
          to: this.state.to,
          location: this.props.location,
          agent: this.props.agent,
          editItinerary: true
        }
      })}
      submitHref={this.context.router.createHref({
        pathname: '/carparks',
        query: {
          from: this.state.from,
          to: this.state.to,
          location: this.props.location,
          agent: this.props.agent
        }
      })}
    />
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEditButtonClick(e) {
    e.preventDefault();
    this.setState({
      editing: true
    })
  }

  handleSaveButtonClick(e) {
    e.preventDefault();
    this.setState({
      editing: false
    })

    this.context.router.push({
      pathname: '/carparks',
      query: {
        from: this.state.from,
        to: this.state.to,
        location: this.props.location,
        agent: this.props.agent
      }
    })
  }
}

EditableItinerary.contextTypes = {
  router: React.PropTypes.object
}

EditableItinerary.mapStateToProps = (state = {
  availability: {}
}, ownProps) => {

  const {
    products: {
      searchProps: {
        from,
        to,
        location,
        agent
      }
    }
  } = state.availability

  return {
    to,
    from,
    location,
    agent,
    editing: ownProps.editing
  }
}

module.exports = connect(EditableItinerary.mapStateToProps)(EditableItinerary)
