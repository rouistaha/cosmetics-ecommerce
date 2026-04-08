import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDark ? 'navbar-dark' : 'navbar-light'}`}>
      <div className="container navbar-container">
        <div className="navbar-logo hover-magnetic">
          <h1>RADIANT</h1>
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="hover-magnetic">Home</a>
          <a href="#shop" className="hover-magnetic">Archive</a>
          <a href="#about" className="hover-magnetic">Philosophy</a>
          <a href="#journal" className="hover-magnetic">Editorial</a>
        </nav>

        <div className="navbar-actions">
          <button className="icon-btn hover-magnetic" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button className="icon-btn hover-magnetic"><Search size={20} strokeWidth={1.5} /></button>
          <button className="icon-btn hover-magnetic"><User size={20} strokeWidth={1.5} /></button>
          <button className="icon-btn cart-btn hover-magnetic">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="cart-badge">2</span>
          </button>
          <button 
            className="mobile-toggle icon-btn hover-magnetic" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
