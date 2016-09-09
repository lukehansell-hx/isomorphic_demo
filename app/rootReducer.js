import { combineReducers } from 'redux'
import availability from './availability/reducer'

const rootReducer = combineReducers({
  availability
})

export default rootReducer
