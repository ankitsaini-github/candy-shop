import React from "react";

const CandyContext= React.createContext({
products:[],
addProduct:(product)=>{},
})
export const CartContext= React.createContext({
  cartlist:[],
  addtoCart:(product)=>{},
  delfromCart:(id,price)=>{},
  })
export default CandyContext;