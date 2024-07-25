import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ currentUser }) => {
  return (
    <div className="HomePage-container">
      <nav className="navbar">
        <div className="navbar-logo">My App</div>
        <div className="navbar-links">
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login">Logout</Link>
        </div>
      </nav>
      <div className="HomePage-content">
        <aside className="side-panel">
          <h3 className="side-panel-title">Menu</h3>
          <ul className="side-panel-links">
            <li><Link to="/home/overview">Overview</Link></li>
            <li><Link to="/home/reports">Reports</Link></li>
            <li><Link to="/home/analytics">Analytics</Link></li>
            <li><Link to="/home/settings">Settings</Link></li>
          </ul>
        </aside>
        <main className="main-section">
          <h1 className="main-title">Welcome to the HomePage</h1>
          <div className="main-content">
            {currentUser && <p>Welcome, {currentUser.username}!</p>}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
