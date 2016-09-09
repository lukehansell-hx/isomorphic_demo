const React = require('react')

require('../style/App.less');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Super Awesome Holiday Extras App</h1>
        { this.props.children }
      </div>
    )
  }
}

module.exports = App;
