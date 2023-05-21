import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUser from './components/LoginUser/LoginU';
import ForgotPass from './components/ForgotPass/Forgotpss';
import ResetPass from './components/ResetPass/Reset';
import Information from './components/Information/Information';
import UpdateEquip from './components/Equipment/Updated/UpdateEquip';
import DetailEquip from './components/Equipment/Details/DetailEquip';
import ServiceList from './components/Serviced/ServiceList/ServiceList';
// import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Equipment from './components/Equipment/Equip/Equipment';
import AddEquip from './components/Equipment/Add/AddEquip';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*"            element={<LoginUser></LoginUser>}></Route>
        <Route path="/Forgot"      element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/Reset"       element={<ResetPass></ResetPass>}></Route>
        <Route path="/Information" element={<Information></Information>}></Route>
        <Route path="/Equipment"   element={<Equipment></Equipment>}></Route>
        <Route path="/AddEquip"    element={<AddEquip></AddEquip>}></Route>
        <Route path="/UpdateEquip" element={<UpdateEquip></UpdateEquip>}></Route>
        <Route path="/DetailEquip" element={<DetailEquip></DetailEquip>}></Route>
        <Route path="/ServiceList" element={<ServiceList></ServiceList>}></Route>
      </Routes>
    </div>
  );
}

export default App;
