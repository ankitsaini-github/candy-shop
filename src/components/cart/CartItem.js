import React from 'react'
import classes from './CartItem.module.css'
function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.cartitem}>
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.qty} Piece</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>Remove</button>
      </div>
    </li>
  );
}

export default CartItem