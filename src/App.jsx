import './App.css'
import logo from './assets/logo.svg'
import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogInForm from './components/forms/LogInForm';

function App() {

  return (
    <>
      <img src={logo} alt='Qencode' className='heading'/>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LogInForm />} />
      </Routes>
    </>
  )
}

export default App
