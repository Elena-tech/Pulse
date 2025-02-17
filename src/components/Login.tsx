import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css"; // Optional: Create this file for styling

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demonstration, we'll consider non-empty credentials as valid.
    if (username.trim() && password.trim()) {
      login();
      navigate("/");
    } else {
      setError("Please enter valid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
