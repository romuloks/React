
import React from "react";
import './App.css';

import Home from "./paginas/home/Home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from "./components/estaticos/footer/Footer";
import Login from "./paginas/home/login/Login";
import Navbar from "./components/estaticos/navbar/Navbar";

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  
  );
}

export default App;