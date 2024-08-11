import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [activeLink, setActiveLink] = useState('/admin-dashboard');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
    fetchAdmins();
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/users');
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await fetch('http://localhost:8080/admins');
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8080/orders');
      const data = await response.json();
      console.log('Fetched Orders:', data); // Log data to check courseName
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id) => {
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingUser)
      });
      setEditingUser(null);
      fetchUsers();
      showPopupMessage('User saved successfully!');
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        method: 'DELETE'
      });
      fetchUsers();
      showPopupMessage('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      setNewUser({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: ''
      });
      fetchUsers();
      showPopupMessage('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleAddAdmin = async () => {
    try {
      await fetch('http://localhost:8080/admins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAdmin)
      });
      setNewAdmin({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        password: ''
      });
      fetchAdmins();
      showPopupMessage('Admin added successfully!');
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  const handleApproveOrder = async (id) => {
    const orderToApprove = orders.find(order => order.id === id);
    const approvedOrder = { ...orderToApprove, status: 'Approved' };

    try {
      await fetch(`http://localhost:8080/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(approvedOrder)
      });
      setOrders(orders.map(order => (order.id === id ? approvedOrder : order)));
      showPopupMessage('Order approved successfully!');
    } catch (error) {
      console.error('Error approving order:', error);
    }
  };
  
  

  const handleSignOut = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/login';
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="admin-dashboard23">
      <nav className="top-navbar23">
        <div className="navbar-content23">
          <span className="navbar-title23">Admin Dashboard</span>
          <button className="logout-button23" onClick={handleSignOut}><FaSignOutAlt className="logout-icon" />Logout</button>
        </div>
      </nav>
      <div className="dashboard-content23">
        <aside className="side-panel23">
          <ul>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-dashboard' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-dashboard')}
              >
                User Management
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-add-user' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-add-user')}
              >
                Add Users
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-add-admin' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-add-admin')}
              >
                Add Admin
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeLink === '/admin-manage-orders' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-manage-orders')}
              >
                Manage Orders
              </a>
            </li>
          </ul>
        </aside>
        <div className="main-content23">
          {activeLink === '/admin-dashboard' && (
            <div className="user-list23">
              <h3>Users</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      {editingUser?.id === user.id ? (
                        <>
                          <td>{user.id}</td>
                          <td>
                            <input
                              type="text"
                              name="firstName"
                              value={editingUser.firstName || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="lastName"
                              value={editingUser.lastName || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="mobile"
                              value={editingUser.mobile || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="email"
                              name="email"
                              value={editingUser.email || ''}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <button onClick={() => handleSave(user.id)}>Save</button>
                            <button onClick={() => setEditingUser(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.id}</td>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.mobile}</td>
                          <td>{user.email}</td>
                          <td>
                            <button onClick={() => setEditingUser(user)}>Edit</button>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeLink === '/admin-add-user' && (
            <div className="add-user23">
              <h3>Add New User</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddUser();
                }}
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={newUser.firstName}
                  onChange={handleNewUserChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={newUser.lastName}
                  onChange={handleNewUserChange}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={newUser.mobile}
                  onChange={handleNewUserChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={handleNewUserChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={newUser.password}
                  onChange={handleNewUserChange}
                  required
                />
                <button type="submit">Add User</button>
              </form>
            </div>
          )}
          {activeLink === '/admin-add-admin' && (
            <div className="add-admin23">
              <h3>Add New Admin</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddAdmin();
                }}
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={newAdmin.firstName}
                  onChange={(e) => setNewAdmin((prev) => ({ ...prev, firstName: e.target.value }))}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={newAdmin.lastName}
                  onChange={(e) => setNewAdmin((prev) => ({ ...prev, lastName: e.target.value }))}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  value={newAdmin.mobile}
                  onChange={(e) => setNewAdmin((prev) => ({ ...prev, mobile: e.target.value }))}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newAdmin.email}
                  onChange={(e) => setNewAdmin((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={newAdmin.password}
                  onChange={(e) => setNewAdmin((prev) => ({ ...prev, password: e.target.value }))}
                  required
                />
                <button type="submit">Add Admin</button>
              </form>
            </div>
          )}
          {activeLink === '/admin-manage-orders' && (
  <div className="manage-orders23">
    <h3>Orders</h3>
    {loading ? <p>Loading...</p> : (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.courseName}</td> {/* Ensure this is correctly mapped */}
              <td>{order.status}</td>
              <td>
                {order.status !== 'Approved' && (
                  <button onClick={() => handleApproveOrder(order.id)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}

        </div>
      </div>
      {showPopup && <div className="popup-message23">{popupMessage}</div>}
    </div>
  );
};

export default AdminDashboard;
