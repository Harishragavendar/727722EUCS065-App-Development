import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { setUserName1 } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { username, password, role : 'ROLE_USER' };

    try {
      const response = await axios.post('http://localhost:8080/auth/login', loginData);
      const token = response.data.token;
      console.log('Token:', token);
      localStorage.setItem('authToken', token);
      setUserName1(username);

      setLoginMessage('Login successful');
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate('/dashboard');
      }, 1000); // 2 seconds before navigating to the dashboard
      
    } catch (error) {
      setLoginMessage('Invalid username or password'); // Error message
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // 2 seconds before hiding the message
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
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
          Are you an Admin? <Link to="/admin"> Log in</Link>
        </div>
      </form>
      {loginMessage && (
        <div className={`login-popup-message ${showPopup ? '' : 'hidden'} ${loginMessage.includes('successful') ? '' : 'error'}`}>
          {loginMessage}
        </div>
      )}
    </div>
  );
};

export default LoginForm;