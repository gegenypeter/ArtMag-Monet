import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArtworkPage from './routes/ArtworkPage'
import Collection from './routes/Collection'
import Login from './routes/Login'
import Register from './routes/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/artwork/*" element={<ArtworkPage/>}/> 
      <Route path="/collection" element={<Collection/>}/>   
     </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);