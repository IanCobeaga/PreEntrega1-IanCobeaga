import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Routes/ItemListContainer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  return (
      <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/category/:id" element={<ItemListContainer/>}/>
            {/*<Route exact path="/item/{id}" element={<ItemDetailContainer />}/> */}
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
