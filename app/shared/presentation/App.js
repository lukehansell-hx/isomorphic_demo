const React = require('react')

require('../style/App.less');

const Header = require('./Header')

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <Header />
        <div className="App-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

module.exports = App;
