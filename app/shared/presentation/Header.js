const React = require('react')

module.exports = () => (
  <nav className="navbar navbar-inverse navbar-static-top" role="navigation">
    <div className="container">
      <a className="navbar-brand" href="http://localhost:8080">
        Holiday Extras
      </a>
      <ul className="nav navbar-nav navbar-right pull-right">
        <li className="dropdown hidden-xs">
          <a className="dropdown-toggle text-right" data-hxtrack-name="navbar-phone-numbers" data-toggle="dropdown" data-track-name="navbar-phone-numbers" data-track-action="toggle" data-track-location="header" href="#">
            <i className="fa fa-phone"></i>
            FREE 0800 phone support
          </a>
        </li>
      </ul>
    </div>
  </nav>
)
