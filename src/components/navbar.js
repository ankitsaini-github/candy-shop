import { useContext } from 'react';
import './navbar.css'
import { CartContext } from './store/CandyContext';
const Navbar=(props)=>{
    const ctx=useContext(CartContext)
    const totalqty=ctx.cartlist.reduce((acc,cur) => +cur.qty+acc,0)
    return(
        <div className='navbar'>
            <div className='navbar-brand'>Candy Shop App</div>
            <button className='cartbtn' onClick={props.onShowCart}>Cart <div className='cartvalue'>{totalqty}</div></button>
        </div>
    )
}
export default Navbar;