const React = require('react');
const { Tile } = require('@holidayextras/ui-toolkit')
const { Link } = require('react-router')

const CarparkTile = ({
  code,
  image,
  name,
  price,
  links
}) => {
  return (
    <Tile image={image}>
      <ul className="list-inline product-info-buttons">
        <li>
          {links.info && <Link to={links.info}>Info</Link>}
        </li>
      </ul>
      <h4>{name}</h4>
      <div className="price">{price}</div>
    </Tile>
  )
}

CarparkTile.context = {
  router: React.PropTypes.func,
  location: React.PropTypes.any
}

module.exports = CarparkTile
