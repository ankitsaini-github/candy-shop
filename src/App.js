import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import CandyForm from "./components/CandyForm.js";
import CandyList from "./components/CandyList.js";
import CandyProvider from "./components/store/CandyProvider.js";
import Cart from "./components/cart/Cart.js";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CandyProvider>
      <div className="App">
        {showCart && <Cart onClose={hideCartHandler} />}
        <Navbar onShowCart={showCartHandler}/>
        <CandyForm />
        <CandyList />
      </div>
    </CandyProvider>
  );
}

export default App;
