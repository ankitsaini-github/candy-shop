import { useContext } from 'react';
import './CandyForm.css'
import CandyContext from './store/CandyContext';

const CandyForm=()=>{
    const ctx=useContext(CandyContext)
    const addproduct=(e)=>{
        e.preventDefault();
        const candy={
            name:e.target.cname.value,
            description: e.target.cdesc.value,
            price: Number(e.target.cprice.value),
            sid: Math.random().toString(16).slice(2),
        }
        ctx.addProduct(candy);
        e.target.cname.value='';
        e.target.cprice.value='';
        e.target.cdesc.value='';
    }
    return(
        <form className='candy-form' onSubmit={addproduct}>
            <span className='form-block'>
            <label htmlFor='candyname'>Candy Name</label>
            <input type='text' id='candyname' name='cname' required/>
            </span>
            <span className='form-block'>
            <label htmlFor='candydesc'>Candy Description</label>
            <input type='text' id='candydesc' name='cdesc' required/>
            </span>
            <span className='form-block'>
            <label htmlFor='candyprice'>Candy Price</label>
            <input type='number' id='candyprice' name='cprice' required/>
            </span>
            <span className='form-block'>
            <button type='submit'>Add Candy</button>
            </span>
        </form>
    )
}
export default CandyForm;