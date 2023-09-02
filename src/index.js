import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Lu9UFgja95o_AaD5IcHb5eHpx64uqvs",
  authDomain: "react-spider-items.firebaseapp.com",
  projectId: "react-spider-items",
  storageBucket: "react-spider-items.appspot.com",
  messagingSenderId: "746967742262",
  appId: "1:746967742262:web:ce20a748936bd87dba6597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
