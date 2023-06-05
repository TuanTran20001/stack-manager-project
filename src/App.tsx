import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginUser from './components/LoginUser/LoginU';
import ForgotPass from './components/ForgotPass/Forgotpass';
import ResetPass from './components/ResetPass/Reset';
import Information from './components/Information/Information';
import UpdateEquip from './components/Equipment/Updated/UpdateEquip';
import DetailEquip from './components/Equipment/Details/DetailEquip';
import ServiceList from './components/Serviced/ServiceList/ServiceList';
import ServiceAdd from './components/Serviced/Add/ServiceAdd';
// import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Equipment from './components/Equipment/Equip/Equipment';
import AddEquip from './components/Equipment/Add/AddEquip';
import ServiceUpdate from './components/Serviced/Updated/ServiceUpdate';
import ServiceDetails from './components/Serviced/Details/ServiceDetails';
import List from './components/Progression/Total/List/List';
import New from './components/Progression/New/New';
import Details from './components/Progression/Details/Details';
import Prints from './components/Progression/Prints/Prints';
import Skips from './components/Progression/Total/Skips/Skips';
import Used from './components/Progression/Total/Used/Used';
import Wait from './components/Progression/Total/Wait/Wait';
import Reported from './components/Reported/Report';
import RoleList from './components/Role/Account/RoleList/RoleList';
import RoleAdd from './components/Role/Account/RoleAdd/RoleAdd';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LoginUser></LoginUser>}></Route>
        <Route path="/Forgot" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/Reset" element={<ResetPass></ResetPass>}></Route>
        <Route path="/Information" element={<Information></Information>}></Route>
        <Route path="/Equipment" element={<Equipment></Equipment>}></Route>
        <Route path="/AddEquip" element={<AddEquip></AddEquip>}></Route>
        <Route path="/UpdateEquip" element={<UpdateEquip></UpdateEquip>}></Route>
        <Route path="/DetailEquip" element={<DetailEquip></DetailEquip>}></Route>
        <Route path="/ServiceList" element={<ServiceList></ServiceList>}></Route>
        <Route path="/ServiceAdd" element={<ServiceAdd></ServiceAdd>}></Route>
        <Route path="/ServiceUpdate" element={<ServiceUpdate></ServiceUpdate>}></Route>
        <Route path="/ServiceDetails" element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path="/List" element={<List></List>}></Route>
        <Route path="/New" element={<New></New>}></Route>
        <Route path="/Details" element={<Details></Details>}></Route>
        <Route path="/Prints" element={<Prints></Prints>}></Route>
        <Route path="/Skips" element={<Skips></Skips>}></Route>
        <Route path="/Used" element={<Used></Used>}></Route>
        <Route path="/Used" element={<Used></Used>}></Route>
        <Route path="/Wait" element={<Wait></Wait>}></Route>
        <Route path="/Reported" element={<Reported></Reported>}></Route>
        <Route path="/RoleList" element={<RoleList></RoleList>}></Route>
        <Route path="/RoleAdd" element={<RoleAdd></RoleAdd>}></Route>
      </Routes>
    </div>
  );
}

export default App;
