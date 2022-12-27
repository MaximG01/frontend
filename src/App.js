
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import User from './PageComponent/User';
import Display from './PageComponent/Display';
import DisplayLoadout from './PageComponent/DisplayLoadout';

import InfoWarzone from './PageComponent/InfoWarzone';
import LoadoutPage from './PageComponent/LoadoutPage';

 
function App(){
  
  return (
    <Router>
        <Routes>

           <Route path='/infowarzone/:weaponId' element={<InfoWarzone/>}/>
           <Route path='/infowarzone/Loadout' element={<LoadoutPage/>}/>
           <Route path='/infowarzone/User' element={<User/>}/>
           <Route path='/infowarzone/Display' element={<Display/>}/>
           <Route path='/infowarzone/DisplayLoadouts' element={<DisplayLoadout/>}/>
        </Routes>
    </Router>
    
  );
  }
  

export default App;
