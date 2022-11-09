import { useState } from 'react'
<<<<<<< HEAD
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

 

  return (
    <div>
      <Sidebar/>
    </div>
=======
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
>>>>>>> 0cef20ea9b7dc701999f27e32953761c69bc934c
  )
    
      
      
    
  
}

export default App;
