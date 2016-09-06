const React = require('react');

class PreFetchContext extends React.Component {
  getChildContext() {
    return {
      preFetchedData: this.props
    }
  }

  render() {
    return this.props.children
  }
}

PreFetchContext.childContextTypes = {
  preFetchedData: React.PropTypes.object
}

module.exports = PreFetchContext
