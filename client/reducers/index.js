import { combineReducers } from 'redux'

import beers from './beers'
import navigation from './navigation'
import cart from './cart'

export default combineReducers({
  beers,
  cart,
  navigation
})
