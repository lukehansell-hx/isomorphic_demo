const React = require('react')
const { Component } = React

const SearchForm = require('../presentation/SearchForm')

class Search extends Component {
  constructor(props, context) {
    super(props, context)

    const defaultFromDate = new Date()
    defaultFromDate.setDate(new Date().getDate() + 1)
    const defaultToDate = new Date()
    defaultToDate.setDate(new Date().getDate() + 8)

    this.submitPath = '/carparks'

    this.state = {
      from: defaultFromDate.toISOString().slice(0, 10),
      to: defaultToDate.toISOString().slice(0, 10),
      location: 'LGW',
    }
  }

  render() {
    return (
      <SearchForm
        from={this.state.from}
        to={this.state.to}
        location={this.state.location}
        agent="WEB1"
        onChange={(e) => this.handleOnChange(e)}
        onSubmit={(e) => this.handleSubmit(e)}
        action={this.submitPath}
      />
    )
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.history.push({
      pathname: this.submitPath,
      query: {
        from: this.state.from,
        to: this.state.to,
        location: this.state.location,
        agent: 'WEB1'
      }
    })
  }
}

module.exports = Search
