import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from "./Routes/Home";
import ItemListContainer from './Routes/ItemListContainer';
import ItemDetailContainer from './Routes/ItemDetailContainer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  const [itemsQuantity, setItemsQuantity] = useState(0);

  const addItemListener = () => {
      setItemsQuantity(itemsQuantity + 1);
  }

  const clearChart = () => {
      setItemsQuantity(0);
  }

  return (
      <>
        <BrowserRouter>
          <NavBar 
          itemsQuantity={itemsQuantity}/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/items" element={<ItemListContainer/>}/>
            <Route exact path="/items/:id" element={<ItemListContainer/>}/>
            <Route exact path="/item/:id" element={<ItemDetailContainer itemsQuantity={itemsQuantity} onAdd={addItemListener}/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
