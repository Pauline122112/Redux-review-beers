import { combineReducers } from 'redux'

import navigation from './navigation'
import beers from './beers'
import cart from './cart'

export default combineReducers({
  navigation,
  beers,
  cart
})
