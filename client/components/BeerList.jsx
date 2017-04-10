import React from 'react'

import BeerListItem from './BeerListItem'
import { connect } from 'react-redux'


const BeerList = (props) => (
  <div className='beerlist'>

      {props.beers.map(function(beer) {
        return (
          <BeerListItem beer={beer} key={beer.id} dispatch={props.dispatch} />
        )
    })}

  </div>
)

export default BeerList
