import './CandyItem.css'
import { useContext } from 'react';
import {CartContext} from './store/CandyContext';

const CandyItem=(props)=>{
    const ctx=useContext(CartContext);

    const addtoCartHandler=(e)=>{
        const candy={
            name:props.name,
            description:props.description,
            price:Number(props.price),
            qty:Number(e.target.value),
            id:`c_${props.id}`,
        }
        console.log(candy.price)
        ctx.addtoCart(candy)
    }

    return(
        <li id={props.id} className='candy-item'>
            <div className='candy-info'>
                <span>name: {props.name}</span>
                <span> desc: {props.description}</span>
                <span>price: Rs {props.price}</span>
            </div>
            <div className='candyaddbtns'>
            <button className='add-btn' type='click' value="1" onClick={addtoCartHandler}>Buy 1</button>
            <button className='add-btn' type='click' value="2" onClick={addtoCartHandler}>Buy 2</button>
            <button className='add-btn' type='click' value="3" onClick={addtoCartHandler}>Buy 3</button>
            </div>
            
        </li>
    )
}
export default CandyItem;