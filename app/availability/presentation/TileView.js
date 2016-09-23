const React = require('react')
const { Tile } = require('@holidayextras/ui-toolkit')

module.exports = ({
  products
}, context) => (
  <ul className="product-container">
    {products.map(({
      image,
      code,
      name
    }) => (
      <li key={code} className="product carpark">
        <Tile image={image}>
          <h4>{name}</h4>
        </Tile>
      </li>
    ))}
  </ul>
)
