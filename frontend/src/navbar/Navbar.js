import React from 'react';
import './Navbar.css';
import logo from './molerhealth.png';

const Navbar = () => {
    return (
    <nav>  
        <p className="logo"><img src={logo} alt="Logo"/>MolerHealth</p>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Support</li>
            <li>Documentation</li>
            <li className="sign-up">Sign Up</li>
        </ul>
    </nav>  
    );
  };
  
  export default Navbar;