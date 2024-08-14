import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    roles: 'ROLE_USER'
  });
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    name: '',
    email: '',
    password: '',
    roles: 'ROLE_ADMIN'
  });
  const [activeLink, setActiveLink] = useState('/admin-dashboard');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  // Retrieve the token from localStorage
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    fetchUsers();
    fetchAdmins();
    fetchOrders();
    fetchPayments();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin/get/users', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await fetch('http://localhost:8080/admins', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setAdmins(data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin/get/orders', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const fetchPayments = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch('http://localhost:8080/admin/get', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      console.log(data); // Log the data to see what is returned
      setPayments(data);
    } catch (error) {
      console.error('Error fetching payments:', error);
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

  const handleNewAdminChange = (e) => {
    const { name, value } = e.target;
    setNewAdmin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (id) => {
    const token = localStorage.getItem('authToken'); // Retrieve the access token from localStorage
    
    try {
      await fetch(`http://localhost:8080/admin/edituser/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingUser)
      });
  
      setEditingUser(null);
      fetchUsers();
      showPopupMessage('User saved successfully!');
    } catch (error) {
      console.error('Error saving user:', error);
      showPopupMessage('Error saving user.');
    }
  };
  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/admin/deleteuser/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        fetchUsers();
        showPopupMessage('User deleted successfully!');
      } else {
        const errorData = await response.json();
        showPopupMessage(`Error deleting user: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      showPopupMessage(`Error deleting user: ${error.message}`);
    }
  };

  const handleAddUser = async () => {
    try {
      await fetch('http://localhost:8080/auth/addNewUser', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      setNewUser({
        name: '',
        email: '',
        password: '',
        roles: 'ROLE_USER'
      });
      fetchUsers();
      showPopupMessage('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const handleAddAdmin = async () => {
    try {
      await fetch('http://localhost:8080/auth/addNewUser', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAdmin)
      });

      setNewAdmin({
        name: '',
        email: '',
        password: '',
        roles: 'ROLE_ADMIN'
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
      await fetch(`http://localhost:8080/admin/changestatus/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, status: 'Approved' })
      });

      setOrders(orders.map(order => (order.id === id ? approvedOrder : order)));
      showPopupMessage('Order approved successfully!');
    } catch (error) {
      console.error('Error approving order:', error);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
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
          <button className="logout-button23" onClick={handleSignOut}>
            <FaSignOutAlt className="logout-icon" /> Logout
          </button>
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
                User/Admin Management
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
            <li>
              <a
                href="#"
                className={activeLink === '/admin-manage-payments' ? 'active' : ''}
                onClick={() => handleLinkClick('/admin-manage-payments')}
              >
                Manage Payments
              </a>
            </li>
          </ul>
        </aside>
        <div className="main-content23">
          {activeLink === '/admin-dashboard' && (
            <div className="user-list23">
              <h2>User Management</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      {editingUser?.id === user.id ? (
                        <>
                        <td>{user.id}</td>
                          <td>
                            <input
                              type="text"
                              name="name"
                              value={editingUser.name}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="email"
                              value={editingUser.email}
                              onChange={handleInputChange}
                            />
                          </td>
                          <td>{user.roles}</td>
                          <td>
                            <button onClick={() => handleSave(user.id)}>Save</button>
                            <button onClick={() => setEditingUser(null)}>Cancel</button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.roles}</td>
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
                  name="name"
                  placeholder="Name"
                  value={newUser.name}
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
            <div className="add-user23">
              <h3>Add New Admin</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddAdmin();
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={newAdmin.name}
                  onChange={handleNewAdminChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newAdmin.email}
                  onChange={handleNewAdminChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={newAdmin.password}
                  onChange={handleNewAdminChange}
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
                        <td>{order.coursename}</td>
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
          {activeLink === '/admin-manage-payments' && (
            <div className="manage-orders23">
              <h3>Payments</h3>
              {loading ? <p>Loading...</p> : (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>CARD NUMBER</th>
                      <th>CVV</th>
                      <th>EXPIRY DATE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map(payment => (
                      <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.name}</td>
                        <td>{payment.cardNumber}</td>
                        <td>{payment.cvv}</td>
                        <td>{payment.expiryDate}</td>
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