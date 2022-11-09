import React from 'react';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import AlertNotification from './components/shared/components/AlertNotification';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<LoginPage/>} />
          <Route exact path='/register' element={<RegisterPage/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Navigate to='/dashboard'/>} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
