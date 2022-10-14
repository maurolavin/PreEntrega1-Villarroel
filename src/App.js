import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import ItemContainer from './Components/ItemListContainer/ItemContainer.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './Components/ItemListContainer/ItemDetailContainer.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <h1>Bienvenido a NightWish</h1>
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/detail/:productId' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
      
    </div>

  );
}
