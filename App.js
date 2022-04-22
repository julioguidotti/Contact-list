import React from 'react';
import './App.css';
import {Routes, Route,Navigate} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import ContactList from './ContactList/ContactList';
import ViewContact from './ViewContact/ViewContact';
import ViewSecondContact from './ViewContact/v2';
import ViewThirdContact from './ViewContact/v3';
import ViewFourthContact from './ViewContact/v4';
import ViewFifthContact from './ViewContact/v5';
import ViewSeventhContact from './ViewContact/v7';
import ViewSixthContact from './ViewContact/v6';
import ViewEiethContact from './ViewContact/v8';
import ViewNinthContact from './ViewContact/v9';
import ViewTenthContact from './ViewContact/v10';


let App=() =>{
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path ={'/'}element ={<Navigate to={'contacts/list'}/>}/>
        <Route path ={'/contacts/list'} element={<ContactList/>}/>
        <Route path ={'/contacts/view/:1'} element={<ViewContact/>}/>
        <Route path ={'/contacts/view2'} element={<ViewSecondContact/>}/>
        <Route path ={'/contacts/view3'} element={<ViewThirdContact/>}/>
        <Route path ={'/contacts/view4'} element={<ViewFourthContact/>}/>
        <Route path ={'/contacts/view5'} element={<ViewFifthContact/>}/>
        <Route path ={'/contacts/view6'} element={<ViewSixthContact/>}/>
        <Route path ={'/contacts/view7'} element={<ViewSeventhContact/>}/>
        <Route path ={'/contacts/view8'} element={<ViewEiethContact/>}/>
        <Route path ={'/contacts/view9'} element={<ViewNinthContact/>}/>
        <Route path ={'/contacts/view10'} element={<ViewTenthContact/>}/>
      </Routes>
      
      
    </React.Fragment>
  );
}

export default App;
