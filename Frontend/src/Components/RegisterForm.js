import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const roles="ROLE_USER";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setRegistrationMessage('Passwords do not match');
      return;
    }
  
    const userData = { name, password, email, roles };
  
    try {
      const response = await axios.post('http://localhost:8080/auth/addNewUser', userData);
      setRegistrationMessage('Registration successful!');
      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.error('Network error:', error); // Log the error to the console
      if (error.response) {
        const { message } = error.response.data;
        if (message.includes('duplicate email')) {
          setRegistrationMessage('Email address already in use.');
        } else {
          setRegistrationMessage('Registration failed. Please try again.');
        }
      } else {
        setRegistrationMessage('Network error. Please try again.');
      }
    }
  };
  

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Register</h1>
        <input
          className="register-input"
          type="text"
          placeholder="Name*"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="email"
          placeholder="Email*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="register-input"
          type="password"
          placeholder="Confirm Password*"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="register-button" type="submit">
          Register
        </button>
        <div className="register-signin-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
        {registrationMessage && (
          <p className="register-message-error">{registrationMessage}</p>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
