import React from 'react'
import CartListItem from './CartListItem'
import { connect } from 'react-redux'
// This might need to be turned into a stateful component (aka container)
const CartList = (props) =>
(
  <table>
    <thead>
      <th>Beer</th>
      <th>Quantity</th>
      <th>Remove</th>
    </thead>

<tbody>

  {props.cart.map(function(beer) {
    return (
      <CartListItem name={beer.name} quantity={beer.quantity} key={beer.id} />
    )
  })}

  </tbody>
</table>
)
export default CartList
