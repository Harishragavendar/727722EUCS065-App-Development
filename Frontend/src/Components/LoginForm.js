import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';
import { FaEnvelope,FaLock } from 'react-icons/fa';
import { UserContext } from './UserContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();
  const { setUserName1 } = useContext(UserContext); 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await axios.get('http://localhost:8080/users');
      setLoginMessage('Login successful');
      setUserName1(email);
      navigate('/dashboard');
    } catch (error) {
      setLoginMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <FaEnvelope className="login-input-icon" />
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Are you an Admin?<Link to="/admin"> Log in</Link>
        </div>
        {loginMessage && <p className="login-message">{loginMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;