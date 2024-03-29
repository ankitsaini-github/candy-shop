import './Cart.css'
import Modal from '../ui/Modal'
import CartItem from './CartItem';
import { CartContext } from '../store/CandyContext';
import { useContext } from 'react';
// [{id:1,name:'eclair',description:'choco',price:10, qty:2},{id:2,name:'milkybar',description:'white',price:20,qty:3}]
function Cart(props) {
  const ctx=useContext(CartContext)
  const total=ctx.cartlist.reduce((acc,curr)=>acc+(curr.price*curr.qty),0)
  const cartItemRemoveHandler = (id,price,qty) => {
    const deduct=Number(price)*Number(qty)
    ctx.delfromCart(id,deduct);
  };
  const cartItems = (
    <ul className='cart-items'>
      {ctx.cartlist.map((item) => (
        <CartItem
          key={item.cid}
          name={item.name}
          description={item.description}
          qty={item.qty}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.cid,item.price,item.qty)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>Rs {total}</span>
      </div>
      <div className="actions">
        <button className='button--alt' onClick={props.onClose}>
          Close
        </button>
        <button className="button">Order</button>
      </div>
    </Modal>
  )
}

export default Cart