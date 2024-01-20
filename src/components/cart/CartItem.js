import React from 'react'
import classes from './CartItem.module.css'
function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.qty}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>x</button>
      </div>
    </li>
  );
}

export default CartItem