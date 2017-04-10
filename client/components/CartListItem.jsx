import React from 'react'
import {navigate} from '../actions'

// This might need to be turned into a stateful component (aka container)
const CartListItem = (props) => (
  <tr>
      <td>{props.name}</td>
      <td><span>{props.quantity}</span> <input className="update-input"/></td>
      <td><button><span className="fa fa-trash fa-2x"></span></button></td>
    </tr>
)

export default CartListItem
