import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.css'
import Logo from '../.././assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Little Lemon" />
        </Link>
      </div>
      <nav>
        <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              About
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              Menu
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              Reservations
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              Order
            </NavLink>
          </li>
          <li className="nav-menu-item">
            <NavLink className="nav-link" to="/">
              Login
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? (
            <FaTimes size={20} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#000' }} />
          )}
        </div>
      </nav>
    </header>
  );
};
export default Header;
