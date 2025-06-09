import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaStore,
  FaTags,
  FaListAlt,
  FaCheckCircle
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../../styles/StoreDashboard.css";
import { useAuth } from "../../context/AuthContext";

const StoreDashboard = ({ children }) => {
   const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="store-dashboard-container">
      {/* Mobile Toggle Icon */}
      <div className="store-mobile-toggle">
        <FontAwesomeIcon
          icon={sidebarOpen ? faTimes : faBarsStaggered}
          className="store-toggle-icon"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div className={`store-dashboard-sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
        <h2>Store Dashboard</h2>
        <ul className="store-nav-menu">
          <li className="store-nav-item">
            <Link
              to="/storeinformation"
              className={`store-nav-link ${
                location.pathname.startsWith("/storeinformation") ? "active" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <FaStore className="nav-icon" /> Store Information
            </Link>
          </li>
          <li className="store-nav-item">
            <Link
              to="/couponform"
              className={`store-nav-link ${
                location.pathname.startsWith("/couponform") ? "active" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <FaTags className="nav-icon" /> Create Coupon
            </Link>
          </li>
          <li className="store-nav-item">
            <Link
              to="/couponlist"
              className={`store-nav-link ${
                location.pathname.startsWith("/couponlist") ? "active" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <FaListAlt className="nav-icon" /> My Coupons
            </Link>
          </li>
          <li className="store-nav-item">
            <Link
              to="/mystore"
              className={`store-nav-link ${
                location.pathname.startsWith("/mystore") ? "active" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <FaListAlt className="nav-icon" /> My Store
            </Link>
          </li>
          <li className="store-nav-item">
            <Link
              to="/redeemedlist"
              className={`store-nav-link ${
                location.pathname.startsWith("/redeemedlist") ? "active" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <FaCheckCircle className="nav-icon" /> Redeemed Coupons
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="store-dashboard-main">
        <h1 className="store-dashboard-header">  Dashboard</h1>
        {children}
      </div>
    </div>
  );
};

export default StoreDashboard;
