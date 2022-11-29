import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from './components/estaticos/Footer/Footer';
import NavBar from './components/estaticos/NavBar/NavBar';
import { About } from './components/Paginas/About/About';
import { Home } from './components/Paginas/Home/Home';

function App() {
  return(
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/home' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

