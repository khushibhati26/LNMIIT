import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import { useAuth } from '../../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = async () => {
    if (user) {
      try {
        await logout();
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
      }
    } else {
      navigate('/login');
    }
  };  

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">Health Hospital</div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link to="/">Home</Link></li> {/* Using Link for navigation */}
          <li><Link to="/services">Services</Link></li>
          {/* <li><Link to="/doctors">Doctors</Link></li> */}
          {/* <li><Link to="/appointment">Appointment</Link></li> */}
          <li><Link to="/about">About</Link></li>
          {/* <li><Link to="/login">Login</Link></li> */}
        </ul>
        <button onClick={handleAuthClick} className="auth-button">
        {user ? 'Logout' : 'Login'}
      </button>
      </nav>
    </div>
  );
};

export default Navbar;
