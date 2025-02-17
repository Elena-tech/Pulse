// src/App.tsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard"; // Crypto Dashboard
import StockDashboard from "./components/StockDashboard"; // New Finance Dashboard
import Settings from "./components/Settings";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useTheme } from "./context/ThemeContext"; // Import your theme context hook

const App: React.FC = () => {
  // Destructure the theme from our ThemeContext
  const { theme } = useTheme();

  return (
    // Apply both "app-container" and the current theme ("light" or "dark")
    <div className={`app-container ${theme}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stocks" element={<StockDashboard />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
