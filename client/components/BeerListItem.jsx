import React from 'react'
import {navigate} from '../actions'
// This might need to be turned into a stateful component (aka container)
const BeerListItem = (props) => (
  <div className='beerListItem'>
    <div className="beer">
      <p className="name">{props.beer.name}</p>
      <p className="description">A {props.beer.style} from {props.beer.brewery}</p>
      <p>
        <span className="country">{props.beer.country}</span>
        <span className="abv">{props.beer.abv}abv</span>
        <a href="#" id={props.id}
          onClick={
            () => props.dispatch(navigate('cart'))}
            className="cart-link">Add to cart</a>
      
      </p>
    </div>

  </div>
)

export default BeerListItem
