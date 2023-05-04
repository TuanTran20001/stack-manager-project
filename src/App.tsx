import React from 'react';
import logo from './logo.svg';
import LoginUser from './components/LoginUser/LoginU';
import ForgotPass from './components/ForgotPass/Forgotpss';
import ResetPass from './components/ResetPass/Reset';
import Infomation from './components/Information/Information';
// import Dashboard from './components/Dashboard/Dashboard'
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LoginUser></LoginUser>}></Route>
        <Route path="/Forgot" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/Reset" element={<ResetPass></ResetPass>}></Route>
        <Route path="/Infomation" element={<Infomation></Infomation>}></Route>
        {/* <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
