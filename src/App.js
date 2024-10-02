import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskOne from './Task/TastOne';
import ForgotPassword from './Task/ForgotPassword';
import SignIn from './Task/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskOne />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
