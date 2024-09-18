//Hooks
import { useState, useEffect } from 'react'
//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
//Components
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
//libs
import axios from 'axios'
//contexts
import ShopContext from './contexts/ShopContext'

const App = () => {

  let [items, setItems] = useState([]);
  let [cartItems, setCartItems] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseProducts = await axios.get("https://662be47fde35f91de159d19f.mockapi.io/petshop/products");
        setItems(responseProducts.data);

        const responseCart = await axios.get("https://662be47fde35f91de159d19f.mockapi.io/petshop/cart");
        setCartItems(responseCart.data);

      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts();
  }, []);

  return (
    <ShopContext.Provider value={{ items, setItems, cartItems, setCartItems }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/view_product/:productId' element={<ProductDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </ShopContext.Provider>
  )
}

export default App

