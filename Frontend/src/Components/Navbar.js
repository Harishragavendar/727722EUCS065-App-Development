import React, { useState } from 'react';
import { FaRocket, FaUserCircle, FaSignInAlt } from 'react-icons/fa';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleAdmin = () => {
    navigate('/admin');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <FaRocket className="navbar-icon" />
        <h1>EduGo!</h1>
      </div>
      <div className="navbar-menu">
        <button className="admin-login-btn" onClick={handleAdmin}>
          <FaSignInAlt /> Admin Login
        </button>
        <div className="account-icon" onClick={handleDropdownToggle}>
          <FaUserCircle className="account-icon-image" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item" onClick={handleLogout}>Logout</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
