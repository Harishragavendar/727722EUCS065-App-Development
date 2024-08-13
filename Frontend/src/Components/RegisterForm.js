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
  const [showPopup, setShowPopup] = useState(false);
  const roles = "ROLE_USER";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setRegistrationMessage('Passwords do not match');
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      return;
    }

    const userData = { name, password, email, roles };

    try {
      const response = await axios.post('http://localhost:8080/auth/addNewUser', userData);
      setRegistrationMessage('Registration successful!');
      setShowPopup(true);

      // Clear form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // 2 seconds before hiding the popup
    } catch (error) {
      console.error('Network error:', error);

      let errorMessage = 'Registration failed. Please try again.';
      if (error.response) {
        const { message } = error.response.data;
        if (message.includes('duplicate email')) {
          errorMessage = 'Email address already in use.';
        }
      } else {
        errorMessage = 'Network error. Please try again.';
      }
      setRegistrationMessage(errorMessage);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
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
      </form>
      {registrationMessage && (
        <div className={`register-popup-message ${showPopup ? '' : 'hidden'} ${registrationMessage.includes('successful') ? '' : 'error'}`}>
          {registrationMessage}
        </div>
      )}
    </div>
  );
};

export default RegisterForm;