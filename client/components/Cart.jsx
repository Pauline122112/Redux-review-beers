import React from 'react'
import { connect } from 'react-redux'
import CartList from './CartList'


const Cart = (props) =>
  (
    <div className="cart">
      <p className="welcome">Thirsty? Sweet! You're one step closer to a quenching.</p>
      <CartList cart={props.cart} />

      <p className="actions">
        <a href="index.html">Continue shopping</a>
        <button>Update</button>
        <button className="button-primary">Checkout</button>
      </p>

    </div>
  )

  const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


export default connect(mapStateToProps)(Cart)
