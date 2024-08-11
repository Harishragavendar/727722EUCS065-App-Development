import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch the list of admins from the server
      const response = await axios.get('http://localhost:8080/admins');
      const admins = response.data;

      // Check if the provided credentials match any of the admins
      const isValid = admins.some(admin => admin.email === email && admin.password === password);

      if (isValid) {
        setLoginMessage('Login successful');
        
        // Navigate to admin dashboard after login
        navigate('/admin-dashboard'); 
      } else {
        setLoginMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching admins:', error);
      setLoginMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="admin-page45">
      <div className="admin-login-container45">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group45">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group45">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button45">Login</button>
          {loginMessage && <p className="login-message">{loginMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
