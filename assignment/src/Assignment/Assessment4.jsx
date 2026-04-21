import React, { useState } from 'react';

const ThemeToggle = () => {
  // 1. Initialize state to track if dark mode is active
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Define a function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // 3. Define styles for both modes
  const themeStyles = {
    backgroundColor: isDarkMode ? '#121212' : '#ffffff',
    color: isDarkMode ? '#ffffff' : '#000000',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease', // Smooth transition between colors
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h1>
      <p>Click the button below to change the theme.</p>
      
      {/* 4. The toggle button */}
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          borderRadius: '5px',
          border: '1px solid',
          backgroundColor: isDarkMode ? '#ffffff' : '#000000',
          color: isDarkMode ? '#000000' : '#ffffff',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
