import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard'; 
import Payment from './Components/Payments';
import Contact from './Components/Contact';

import AdminPage from './Components/AdminPage';
import AdminDashboard from './Components/AdminDashboard';
import { UserProvider } from './Components/UserContext';
import AboutUs from './Components/About-us/AboutUs';
// import { UserProvider } from './Components/UserContext';

const App = () => {
  return (
      <UserProvider>
        <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
      </UserProvider>
  );
};

export default App;