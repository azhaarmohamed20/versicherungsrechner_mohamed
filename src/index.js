import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Rechner from './pages/Rechner';


ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/rechner' element={<Rechner />}/>
      <Route path='/about' element={<Home />}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);



reportWebVitals();
