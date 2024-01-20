import React from "react";

const CandyContext= React.createContext({
products:[],
addProduct:(product)=>{},
})
export const CartContext= React.createContext({
  cartlist:[],
  totalAmount:0,
  addtoCart:(product)=>{},
  delfromCart:(id,price)=>{},
  })
export default CandyContext;