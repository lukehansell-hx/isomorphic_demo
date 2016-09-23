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
          return {
            image: product.images[0] || null,
            name: product.name,
            code: product.code
          }
        })
      })

    default:
      return state
  }

}
