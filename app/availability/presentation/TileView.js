const React = require('react')
const CarparkTile = require('./CarparkTile');
const AdvertTile = require('./AdvertTile');

module.exports = ({
  products,
  children
}, context) => (
  <div>
    {children}
    <ul className="product-container">
      {products.map( product => (
        <li key={product.code} className="product">
          {product.type === 'carpark' && <CarparkTile {...product} />}
          {product.type === 'advert' && <AdvertTile {...product} />}
        </li>
      ))}
    </ul>
  </div>

)
