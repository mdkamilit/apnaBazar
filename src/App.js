import "./App.css";
import Navbar from "./components/Navbar";
import ProductContextProvider from "./Global/ProductContext";
import CartContextProvider from './Global/CartContext'
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <CartContextProvider>
        <BrowserRouter>
          <Navbar />         
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
