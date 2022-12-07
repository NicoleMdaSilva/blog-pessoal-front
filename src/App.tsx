import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from './components/estaticos/Footer/Footer';
import NavBar from './components/estaticos/NavBar/NavBar';
import { About } from './components/Paginas/About/About';
import { Home } from './components/Paginas/Home/Home';
import { Login } from './components/Paginas/login/login';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;

