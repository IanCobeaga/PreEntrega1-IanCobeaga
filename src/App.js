import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css';

function App() {
  return (
      <>
        <NavBar/>
        <ItemListContainer text="HOLA MUNDO!"/>
      </>
  );
}

export default App;
