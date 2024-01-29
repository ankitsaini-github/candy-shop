import { useEffect, useState } from "react";
import CandyContext,{CartContext} from "./CandyContext";

const api='https://65b7827746324d531d54c82d.mockapi.io/'


function CandyProvider(props) {
  const [CartList,setCartList]=useState([]);
  const [Products, setProducts] = useState([]);

  const getcloudstore=async()=>{
    try{
      const res=await fetch(api+'candystore/1')
      const data= await res.json()
      if(data){
        setProducts(data.store)
      }
    }catch(err){
      console.log(err)
    }
  }

  const updatecloudstore=async(updatedstore)=>{
    try{
      const res=await fetch(api+'candystore/1',{
        method:'PUT',
        body:JSON.stringify({
          store:updatedstore
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(!res.ok){
        throw new Error('got error')
      }
    }catch(err){
      console.log(err)
    }
  }

  const getcloudcart= async()=>{
    try{
      const res=await fetch(api+'candycart/1')
      if(!res.ok){
        throw new Error('got error')
      }
      const data= await res.json()
      if(data){
        setCartList(data.cart)
      }

    }catch(err){
      console.log(err)
    }
  }

  const updatecloudcart= async(updatedItems)=>{
    try{
      const res=await fetch(api+'candycart/1',{
        method:'PUT',
        body:JSON.stringify({
          cart:updatedItems
        }),
        headers:{
          'Content-Type':'application/json'
        }
      })
      if(!res.ok){
        throw new Error('got error')
      }

    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getcloudstore()
    getcloudcart()
  },[])

  const addProductHandler = (product) => {
    const updatedstore=[...Products,product]
    setProducts((prev) => [product,...prev])
    updatecloudstore(updatedstore)
  };

  const addtocartHandler=(candy) => {

      const existingCartItemIndex = CartList.findIndex(
        (item) => item.cid === candy.cid
      );
      const existingCartItem = CartList[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + candy.qty,
        };
        updatedItems = [...CartList];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = CartList.concat(candy);
      }
     updatecloudcart(updatedItems)
    setCartList(updatedItems)

  }


  const delfromcartHandler=(idToRemove,price) => {
    const newArr = CartList.filter((candy) => candy.cid !== idToRemove);
    updatecloudcart(newArr)
    setCartList(newArr)

  }

  const productCtx = {
    products: Products,
    addProduct: addProductHandler,
  };

  const cartctx={
  cartlist:CartList,
  addtoCart:addtocartHandler,
  delfromCart:delfromcartHandler,
  }
  return (
    <CandyContext.Provider value={productCtx}>
      <CartContext.Provider value={cartctx}>
        {props.children}
      </CartContext.Provider>
    </CandyContext.Provider>
  );
}

export default CandyProvider;
