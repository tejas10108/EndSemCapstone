import React from 'react';
import Login from './Components/Login';
import 'typeface-poppins';
import Pomodoro from './Components/pomodoro';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Pomodoro" element={<Pomodoro/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;