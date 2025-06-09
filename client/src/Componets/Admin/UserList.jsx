import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useStore } from "../../context/StoreContext"; // ✅ Import context
import "../../styles/UserList.css";

const UserList = () => {
  const [role, setRole] = useState("store");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const {
    users,
    loading,
    error,
    fetchUsersByRole,
  } = useStore(); // ✅ Use context

  useEffect(() => {
    fetchUsersByRole(role); // ✅ Fetch users from context method
  }, [role]);

  useEffect(() => {
    const results = users.filter(
      (user) =>
        user.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  return (
    <div className="user-management-container">
      <h1 className="user-management-header">User Management</h1>

      <div className="controls-container">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by username or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="role-selector"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="store">Store</option>
          <option value="user">User</option>
        </select>
      </div>

      {loading && <div className="loading-message">Loading users...</div>}
      {error && <div className="error-message">{error}</div>}

      {!loading && !error && (
        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${user.role?.toLowerCase()}`}>
                        {user.role}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="status-message">
                    {searchTerm
                      ? "No users match your search criteria."
                      : "No users found for the selected role."}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
