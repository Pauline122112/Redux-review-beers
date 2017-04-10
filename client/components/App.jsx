import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Listing from './Listing'
import Cart from './Cart'

const App = (props) => {
  const path = props.navigation
  if (path === 'home'){
    return (
      <div>
        <Header />
        <Listing />
      </div>
    )
  }
  if (path === 'cart') {
    return (
      <div>
        <Header />
        <Cart />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    navigation: state.navigation
  }
}

export default connect(mapStateToProps)(App)
