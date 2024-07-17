import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cross_icon_dark from '../assets/cross_icon_dark.png';
import logo_dark from '../assets/logo-dark.png';
import search_icon_light from '../assets/search-w.png';
import search_icon_dark from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_dark from '../assets/day1.png';


import profile_icon from '../assets/profile_icon.jpg';
import logout_icon from '../assets/logout_icon.png';
import cart_icon from '../assets/cart_icon.jpg';
import dark_profile_icon from '../assets/dark_profile_icon.png';


import "../App.css";
import { StoreContext } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ theme, setTheme,setShowLogin}) => {

  const navigate = useNavigate();

  const {token, setToken} = useContext(StoreContext);
  
  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/HomeContent.js");
  }

  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <img src={theme === 'light' ? logo:logo_dark} alt="" className='logo' />

      <ul className='Navcontainer'>
        <li className='navbar_items'>Home</li>
        <li className='navbar_items'>Courses</li>
        <li className='navbar_items'>Instructors</li>
        <li className='navbar_items'>Account</li>
        <li className='navbar_items'>About us</li>
      </ul>
      {!token?<button className='sign-button' onClick={()=>setShowLogin(true)}>Sign In</button>
      :<div className='navbar-profile'>

        <img className='profile_icon' src={theme === 'light' ? profile_icon: dark_profile_icon} alt=''/>

        <ul className='nav-profile-dropdown'>

        {/* <li><img id='cart_icon' src={cart_icon}></img><p>Cart</p></li> */}

          <li onClick={logout}><img id='logout_icon' src={logout_icon}></img><p>Logout</p></li>
        </ul>
        
        </div> }
      
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
