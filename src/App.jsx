import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import User from './components/User.jsx';
import './App.css'


function App() {
  

  return (
    <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />               
              </Routes>
        </Router>
  )
}

export default App
