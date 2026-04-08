import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
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
    <header className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>RADIANT</h1>
        </div>

        <nav className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#shop">Collection</a>
          <a href="#about">Philosophy</a>
          <a href="#journal">Editorial</a>
        </nav>

        <div className="navbar-actions">
          <button className="icon-btn"><Search size={18} strokeWidth={1.5} /></button>
          <button className="icon-btn"><User size={18} strokeWidth={1.5} /></button>
          <button className="icon-btn cart-btn">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="cart-badge">2</span>
          </button>
          <button 
            className="mobile-toggle icon-btn" 
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
