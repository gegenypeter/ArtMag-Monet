import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Artwork from './routes/Artwork'
import Collection from './routes/Collection'
import Login from './routes/Login'
import Register from './routes/Register'

ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/artwork/:id" element={<Artwork/>}/> 
      <Route path="/collection" element={<Collection/>}/>   
     </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);