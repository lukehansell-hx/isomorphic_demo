const React = require('react')
const HapiSDK = require('hapi-sdk')
const _ = {
  assign: require('lodash/assign'),
  omit: require('lodash/omit')
}

import { connect } from 'react-redux'
import { fetchProducts } from '../action/products'

const Loading = require('../../shared/presentation/Loading')
const TileView = require('../presentation/TileView')
const AvailabilityHeader = require('../presentation/AvailabilityHeader')

const TOKEN = 'ef008a98-9434-11e1-af41-123143040224'

class Products extends React.Component {

  static fetchData(dispatch, {location, to, from, agent}) {
    return dispatch(fetchProducts({
      to,
      from,
      location,
      agent
    }))
  }

  componentWillMount() {
    this.loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps)
  }

  loadData(props) {
    const { dispatch, to, from, agent, location, searchProps } = props
    if(
      location === searchProps.location &&
      to === searchProps.to &&
      from === searchProps.from &&
      agent === searchProps.agent
    ) return false

    Products.fetchData(dispatch, props)
  }

  render() {
    const {
      isFetchingProducts,
      products,
      locationMeta,
      children
    } = this.props

    if(isFetchingProducts) {
      return <Loading />
    }

    return (
      <div className="container">
        <AvailabilityHeader
          name={locationMeta.name}
          info={locationMeta.info}/>
        <TileView products={products}>
          {children}
        </TileView>
      </div>
    )
  }
}

Products.mapStateToProps = (state = {
  availability: {},
}, ownProps) => {
  const {
    isFetchingProducts,
    products,
    searchProps,
    locationMeta
  } = state.availability.products || {
    isFetchingProducts: false,
    products: [],
    searchProps: {},
    locationMeta: {
      name: '',
      info: ''
    }
  }

  const {
    to,
    from,
    agent,
    location
  } = ownProps.location.query

  return {
    products,
    isFetchingProducts,
    searchProps,
    locationMeta,
    to,
    from,
    location,
    agent
  }
}

module.exports = connect(Products.mapStateToProps)(Products)
