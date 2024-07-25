import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(username, password, email, phone);
    alert(`Success! Registered with Username: ${username} and Password: ${password}`);
    setUsername('');
    setPassword('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 id='regTitle'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <Link to='/login'>
          <button id='switchBtn' type="submit">Already Registered? Go To Login</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
