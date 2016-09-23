import { RECEIVE_PRODUCTS, REQUEST_PRODUCTS } from '../constant/products'
import { availabilitySearch } from '../helper/promiseSDK'

export function receiveProducts(json, props) {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.products.map(product => product.data),
    searchProps: props,
    searchMeta: json.meta
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
        dispatch( receiveProducts(result, props) )
      })
  }
}
