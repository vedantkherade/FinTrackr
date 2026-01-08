import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header'
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
