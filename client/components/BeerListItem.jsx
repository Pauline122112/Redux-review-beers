import React from 'react'
import { navigate, addToCart } from '../actions'

const BeerListItem = (props) => (
  <div className='beerlistitem'>
    <div className = 'beer'>
      <p className="name">{props.beer.name}</p>
      <p className="description">{props.beer.style} from {props.beer.brewery}</p>
      <p>
        <span className="country">{props.beer.country}</span>
        <span className="abv">{props.beer.abv}</span>
        <a href="#" className="cart-link" id={props.id} onClick={() => props.dispatch(addToCart(props.beer.id, props.beer.name)), () => props.dispatch(navigate('cart'))} >Add to cart</a>
      </p>
    </div>
  </div>
)

export default BeerListItem
