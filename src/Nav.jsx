import React, { useState, useContext } from 'react'
import './Nav.css'
import { ListContext } from './Listcontext';

export default function Nav() {
  const { items, setItems } = useContext(ListContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>NAV</h1>
        </div>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Products</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
    
  )
}
