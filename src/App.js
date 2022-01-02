import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './pages/blog';
import Home from './pages/index';
import PremThemes from './pages/premthemes';
import FreeThemes from './pages/freethemes';
import WebTemp from './pages/webtemp';


function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/prem' element={<PremThemes/>}/>
          <Route path='/free' element={<FreeThemes/>}/>
          <Route path='/webtemp' element={<WebTemp/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
