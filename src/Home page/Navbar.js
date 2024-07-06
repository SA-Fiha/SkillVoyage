import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import logo_dark from '../assets/logo-dark.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day.png';
import LoginButton from "../login-signup";
import "../App.css";


const Navbar = ({ theme, setTheme,setShowLogin}) => {

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo:logo_dark} alt="" className='logo' />

      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>Instructors</li>
        <li>Account</li>
        <li>About us</li>
      </ul>
      <button className='sign-button' onClick={()=>setShowLogin(true)}>sign in</button>
      <div className='search-box'>
        <input type="text" placeholder='Search' />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt=" " />
      </div>
      
      <img onClick={toggle_mode}
        src={theme === 'light' ? toggle_light : toggle_dark} alt=" " className='toggle-icon' />
    </div>
  );
}

export default Navbar;
