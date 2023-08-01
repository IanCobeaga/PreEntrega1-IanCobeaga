import React from "react";
import { useState } from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  const [greeting, setGreeting] = useState("HOLA MUNDO!");

  const changeGreeting = (text) => {
      console.log(text);
      setGreeting(text);
  }

  return (
      <>
        <NavBar greeting={changeGreeting}/>
        <ItemListContainer greeting={greeting}/>
      </>
  );
}

export default App;
