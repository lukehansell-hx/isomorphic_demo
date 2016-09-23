const React = require('react');

const EditableItinerary = require('../container/EditableItinerary')

module.exports = ({
  name,
  info,
  editItinerary
}) => (
  <div className="panel panel-default">
    <div className="panel-body">
      <h2>{name}</h2>
      <EditableItinerary editing={editItinerary}/>
      <div>{info}</div>
    </div>
    <div className="panel-footer panel-footer-navbar">
      <div className="row">
        <div className="cols-sm-12">
          <div className="clearfix sort-options">
            <strong className="navbar-left navbar-text">Order by:</strong>
          </div>
          <div className="clearfix sort-options">
            <strong className="navbar-left navbar-text">Show only:</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
)
