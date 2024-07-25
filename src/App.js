import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage';
import Overview from './components/Overview';
// import Reports from './components/Reports';
// import Analytics from './components/Analytics';
// import Settings from './components/Settings';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = (username, password, email, phone) => {
    setUsers([...users, { username, password, email, phone }]);
  };

  const handleLogin = (username, password, navigate) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
      alert("Login Success :)");
      navigate('/home');
    } else {
      alert("Login Failed! Enter Valid Username or Password");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/" element={<RegisterForm onRegister={handleRegister} />} />
          <Route path="/home" element={<HomePage currentUser={currentUser} />}>
            <Route path="overview" element={<Overview />} />
            {/* <Route path="reports" element={<Reports />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
