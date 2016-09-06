const React = require('react')

class PreFetchedContext extends React.Component {
  getChildContext() {
    return {
      preFetchedData: (window) ? window.data : {}
    }
  }

  render() {
    return this.props.children
  }
}

PreFetchedContext.childContextTypes = {
  preFetchedData: React.PropTypes.object
}

module.exports = PreFetchedContext
