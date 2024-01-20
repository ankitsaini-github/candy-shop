import { useEffect, useState } from "react";
import CandyContext,{CartContext} from "./CandyContext";

const storedProducts =
  JSON.parse(localStorage.getItem("candy-list")) === null
    ? []
    : JSON.parse(localStorage.getItem("candy-list"));

const storedcart =
JSON.parse(localStorage.getItem("candy-cart")) === null
  ? []
  : JSON.parse(localStorage.getItem("candy-cart"));


function CandyProvider(props) {
  const [CartList,setCartList]=useState(storedcart);
  const [Products, setProducts] = useState(storedProducts);
  const [Cartvalue, setCartvalue] = useState(0);
  
  useEffect(() => {
    localStorage.setItem("candy-list", JSON.stringify(Products));
    localStorage.setItem("candy-cart", JSON.stringify(CartList));
  }, [Products,CartList]);

  const addProductHandler = (product) => {
    setProducts((prev) => [product,...prev])
  };

  const addtocartHandler=(candy) => {
    const updatedTotalAmount = Number(Cartvalue) + Number(candy.price) * Number(candy.qty);
      const existingCartItemIndex = CartList.findIndex(
        (item) => item.id === candy.id
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
    setCartList(updatedItems)
    setCartvalue(updatedTotalAmount)
  }


  const delfromcartHandler=(idToRemove,price) => {
    const newArr = CartList.filter((candy) => candy.id !== idToRemove);
    setCartList(newArr)
    setCartvalue((prev) => prev-Number(price))
  }

  const productCtx = {
    products: Products,
    addProduct: addProductHandler,
  };

  const cartctx={
  cartlist:CartList,
  totalAmount:Cartvalue,
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
