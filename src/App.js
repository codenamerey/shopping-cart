import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Shop from "./Shop";
import ShopItem from './components/ShopItem';
import Cart from "./components/Cart";
import 'normalize.css';
import './App.css';




function App() {
  const [cart, setCart] = useState([]);

  function updateCart(cart) {
    setCart(oldCart => oldCart.concat(cart));
  }

  function removeFromCart(id) {
    let newCart = cart.slice();
    let itemToRemove = newCart.find(cartItem => {
      return id == cartItem.id;
    });

    newCart.splice(newCart.indexOf(itemToRemove), 1);
    setCart(newCart);
  }

  return (
    
    <BrowserRouter>
      <div className="App">
        <NavBar cart={cart}></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<ShopItem updateCart={updateCart} cart={cart}/>}></Route>
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
