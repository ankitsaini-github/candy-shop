import React, { useContext} from "react";
import CandyItem from "./CandyItem";
import "./CandyList.css";
import CandyContext from "./store/CandyContext";

const CandyList = () => {

  const ctx = useContext(CandyContext);

  return (
    <div className="product-container">
      <h2>Candy Available :</h2>
      <ul>
        {ctx.products.map((product) => {
          return (
            <CandyItem
              key={product.sid}
              id={product.sid}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default CandyList;
