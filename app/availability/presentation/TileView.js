const React = require('react')
const { Tile } = require('@holidayextras/ui-toolkit')

module.exports = (props, context) => (
  <div>
    {props.products.map(product => (
      <Tile image={product.image} key={product.code}>
        <h2>{product.name}</h2>
      </Tile>
    ))}
  </div>
)
