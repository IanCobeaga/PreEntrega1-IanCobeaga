import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./Routes/Home";
import ItemListContainer from './Routes/ItemListContainer';
import ItemDetailContainer from './Routes/ItemDetailContainer';
import {CartQuantityProvider} from './Contexts/CartContext';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  return (
      <CartQuantityProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/items" element={<ItemListContainer/>}/>
            <Route exact path="/items/:id" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </CartQuantityProvider>
  );
}

export default App;
