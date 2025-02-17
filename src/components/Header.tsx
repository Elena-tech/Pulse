// src/components/Header.tsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import "../styles/Header.css";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <h1>Pulse Lite Dashboard</h1>
      <nav>
        <Link to="/">Crypto Dashboard</Link>
        <Link to="/stocks">Stock Dashboard</Link>
        <Link to="/settings">Settings</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
    </header>
  );
};

export default Header;
