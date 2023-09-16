import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from "./Routes/Home";
import Checkout from './Routes/Checkout';
import ItemListContainer from './Routes/ItemListContainer';
import ItemDetailContainer from './Routes/ItemDetailContainer';
import { CartItemsQuantityProvider} from './Contexts/CartItemsContext';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  return (
      <>
        <div className="page-content">
          <CartItemsQuantityProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/items" element={<ItemListContainer/>}/>
                <Route exact path="/items/:id" element={<ItemListContainer/>}/>
                <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
                <Route exact path="/checkout" element={<Checkout />}/>
              </Routes>
            </BrowserRouter>
          </CartItemsQuantityProvider>
        </div>
        <Footer />
      </>
  );
}

export default App;
