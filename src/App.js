import React, { useEffect, useState } from 'react';
import Navbar from './Home page/Navbar';
import HomeContent from './Home page/HomeContent';
import "./App.css";

const App = () => {
  const curr_theme = localStorage.getItem('curr_theme');
  const [theme, setTheme] = useState(curr_theme ? curr_theme : 'light');

  useEffect(() => {
    localStorage.setItem('curr_theme', theme);
  }, [theme]);

  useEffect(() => {
    console.log(`Theme changed to: ${theme}`); // Debugging: log theme changes
  }, [theme]);

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <HomeContent theme={theme}/>
    </div>
  );
}

export default App;
