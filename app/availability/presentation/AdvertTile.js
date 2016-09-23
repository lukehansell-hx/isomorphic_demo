const React = require('react')
const { Tile } = require('@holidayextras/ui-toolkit')

module.exports = ({
  image,
  name
}) => (
  <Tile image={image}>
    <h4>{name}</h4>
  </Tile>
)
