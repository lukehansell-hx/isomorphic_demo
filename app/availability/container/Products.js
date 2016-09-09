const React = require('react')
const HapiSDK = require('hapi-sdk')
const _ = {
  assign: require('lodash/assign'),
  omit: require('lodash/omit')
}

import { connect } from 'react-redux'
import { fetchProducts } from '../action/products'

const Loading = require('../../shared/presentation/Loading');
const TileView = require('../presentation/TileView');

const TOKEN = 'ef008a98-9434-11e1-af41-123143040224'

class Products extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  componentWillMount() {
    const { dispatch, location, to, from, agent} = this.props

    dispatch(fetchProducts({
      to,
      from,
      location,
      agent
    }))
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, location, to, from, agent} = nextProps

    if(
      location === this.props.location &&
      to === this.props.to &&
      from === this.props.from &&
      agent === this.props.agent
    ) return false

    dispatch(fetchProducts({
      to,
      from,
      location,
      agent
    }))
  }

  render() {
    const { isFetchingProducts, products } = this.props

    if(isFetchingProducts) {
      return <Loading />
    }

    return <TileView products={products} />
  }
}

Products.contextTypes = {
  preFetchedData: React.PropTypes.object
}

function mapStateToProps(state, ownProps) {
  const {
    isFetchingProducts,
    products,
  } = state.availability.products || {
    isFetchingProducts: false,
    products: []
  }

  const {
    to,
    from,
    location,
    agent
  } = ownProps.location.query

  return {
    products,
    isFetchingProducts,
    to,
    from,
    location,
    agent
  }
}

export default connect(mapStateToProps)(Products)
