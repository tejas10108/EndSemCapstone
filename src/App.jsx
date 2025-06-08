import React from 'react';
import Login from './Components/Login';
import 'typeface-poppins';
import Pomodoro from './Components/pomodoro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Pomodoro" element={<Pomodoro/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;