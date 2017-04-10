import React from 'react'
import { connect } from 'react-redux'
import BeerList from './BeerList'
// This might need to be turned into a stateful component (aka container)
const Listing = (props) => (
  <div className='listing'>

      <p className="welcome">Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.</p>

    <BeerList beers={props.beers} dispatch={props.dispatch} />

  </div>

)

function mapStateToProps(state){
  return {
    beers: state.beers
  }
}

const connectedListing = connect(mapStateToProps)(Listing)

export default connectedListing
