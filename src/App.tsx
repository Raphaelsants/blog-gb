import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes> 
      
      <Route path='/home' element={<Home />}/>

      <Route path='/login' element={<Login />}/>

    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
