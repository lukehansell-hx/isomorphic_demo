import { combineReducers } from 'redux'
import products from './products'

const availabilityReducers = combineReducers({
  products
})

export default availabilityReducers
