import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../constant/products'

export default function products(state = {
  isFetchingProducts: false,
  products: []
}, action) {

  switch( action.type ) {

    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: true
      })

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetchingProducts: false,
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
