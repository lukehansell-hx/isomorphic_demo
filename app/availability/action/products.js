import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../constant/products'
import { availabilitySearch } from '../helper/promiseSDK'

export function receiveProducts(json) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.products.map(product => product.data)
  }
}

export function requestProducts({
  location,
  from,
  to,
  agent
}) {
  return {
    type: REQUEST_PRODUCTS,
    location,
    from,
    to,
    agent
  }
}

export function fetchProducts( props = {
  location,
  from,
  to,
  agent
}) {
  return ( dispatch ) => {

    dispatch( requestProducts( props ))
    
    return availabilitySearch(props)
      .then(result => {
        dispatch( receiveProducts(result) )
      })
  }
}
