import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../constant/products'

export default function products(state = {
  isFetchingProducts: false,
  products: [],
  searchProps: {},
  searchMeta: {},
  locationMeta: {
    name: null,
    info: null
  }
}, action) {

  switch( action.type ) {

    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: true
      })

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: false,
        searchProps: action.searchProps,
        searchMeta: action.searchMeta,
        locationMeta: {
          name: action.searchMeta.location.name,
          info: action.searchMeta.location.regional_hotel_info
        },
        products: action.products.map(product => {
          const type = ( product.type === 'carpark' ) ? 'carpark' : 'advert'
          return {
            type,
            image: product.images[0] || null,
            name: product.name,
            code: product.code,
            address: product.address,
            info: product.info_block,
            price: `${action.searchMeta.currency}${(product.price/100).toFixed(2)}`,
            links: {
              info: `/carparks/${product.code}/info?from=${action.searchProps.from}&to=${action.searchProps.to}&location=${action.searchProps.location}&agent=${action.searchProps.agent}`,
              index: `/carparks?from=${action.searchProps.from}&to=${action.searchProps.to}&location=${action.searchProps.location}&agent=${action.searchProps.agent}`
            },
            transfers: product.transfers_summary,
            reviews: product.score
          }
        })
      })

    default:
      return state
  }

}
