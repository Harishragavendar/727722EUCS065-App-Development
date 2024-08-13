import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { UserContext } from './UserContext';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { setUserName1 } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username, password, role: 'ROLE_ADMIN' };

    try {
      const response = await axios.post('http://localhost:8080/auth/login', loginData);
      const token = response.data.token;
      console.log('Token:', token);
      localStorage.setItem('authToken', token);
      setLoginMessage('Login successful');
      setUserName1(username);
      navigate('/admin-dashboard'); // Navigate to the admin dashboard
    } catch (error) {
      setLoginMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Admin Login</h1>
        <FaUser className="login-input-icon" />
        <input
          className="login-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <FaLock className="login-input-icon" />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-button" type="submit">Login</button>
        <div className="login-signup-link">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
        <div className="login-signup-link">
          User? <Link to="/login"> Log in</Link>
        </div>
        {loginMessage && <p className="login-message">{loginMessage}</p>}
      </form>
    </div>
  );
};

export default AdminLoginForm;
