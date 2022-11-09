import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import LandingPage from './landingPage/LandingPage'
import Registration from './registration/Registration';
import Login from './signin/Signin';

function App() {
  

  return (
    <Routes>
<Route exact path="/" element={<LandingPage/>}></Route>
<Route exact path='/registration' element={<Registration />}></Route>
<Route exact path='/login' element={<Login />}></Route>
   </Routes>
  )
    
      
      
    
  
}

export default App;
