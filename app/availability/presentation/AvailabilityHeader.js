const React = require('react');

module.exports = ({
  name,
  info
}) => (
  <div className="panel">
    <h2>{name}</h2>
    <div>{info}</div>
  </div>
)
