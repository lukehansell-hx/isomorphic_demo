const React = require('react')
const { Tile } = require('@holidayextras/ui-toolkit')

module.exports = ({
  products
}, context) => (
  <div>
    {products.map(({
      image,
      code,
      name
    }) => (
      <Tile image={image} key={code}>
        <h2>{name}</h2>
      </Tile>
    ))}
  </div>
)
