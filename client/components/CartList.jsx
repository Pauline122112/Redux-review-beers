import React from 'react'
import CartListItem from './CartListItem'

const CartList = (props) =>
(
  <table>
    <thead>
      <tr>
        <th>Beer</th>
        <th>Quantity</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {props.cart.map(function(beer){
        return (
          <CartListItem name={beer.name} quantity={beer.quantity} key={beer.id} />
        )
      })}
    </tbody>
  </table>
)

export default CartList
