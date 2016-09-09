const React = require('react')

require('../style/App.less');

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <h1>Super Awesome Holiday Extras App</h1>
        </header>
        <div className="App-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

module.exports = App;
