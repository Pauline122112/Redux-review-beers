import React from 'react'
import BeerListItem from './BeerListItem'
import { connect } from 'react-redux'
// This might need to be turned into a stateful component (aka container)
const BeerList = (props) => (
  <div className='beerList'>

  {props.beers.map(function(beer) {
    return (
        <BeerListItem beer={beer} key={beer.id} dispatch={props.dispatch}/>
      )
  })}

  </div>
  )

export default BeerList
