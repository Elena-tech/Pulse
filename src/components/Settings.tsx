import React from "react";
import { useTheme } from "../context/ThemeContext";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Settings</h2>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Settings;
