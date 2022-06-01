import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/main/*' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  ); 
}

export default App;
