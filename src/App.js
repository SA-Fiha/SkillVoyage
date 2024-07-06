import React, { useEffect, useState } from 'react';
import Navbar from './Home page/Navbar';
import HomeContent from './Home page/HomeContent';
import "./App.css";
import LoginPopup from './LoginPopop/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const curr_theme = localStorage.getItem('curr_theme');
  const [theme, setTheme] = useState(curr_theme ? curr_theme : 'light');

  useEffect(() => {
    localStorage.setItem('curr_theme', theme);
  }, [theme]);

  useEffect(() => {
    console.log(`Theme changed to: ${theme}`);
  }, [theme]);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} theme={theme}/>: <></>}
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} setShowLogin={setShowLogin} />
        <HomeContent theme={theme} />
      </div>
    </>
  );
}

export default App;
