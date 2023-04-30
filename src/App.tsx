import React from 'react';
import logo from './logo.svg';
import LoginUser from './components/LoginUser/LoginU';
import ForgotPass from './components/ForgotPass/Forgotpss';
import ResetPass from './components/ResetPass/Reset';
import Infomation from './components/Information/Information';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginUser></LoginUser>}></Route>
        <Route path="/Forgot" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/Reset" element={<ResetPass></ResetPass>}></Route>
        <Route path="/Infomation" element={<Infomation></Infomation>}></Route>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
