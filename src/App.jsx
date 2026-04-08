import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Values from './components/Values';
import Journal from './components/Journal';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isDark, setIsDark] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('radiant-theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
    }
  }, []);

  // Update classes and storage
  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light-theme');
      localStorage.setItem('radiant-theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      localStorage.setItem('radiant-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Values />
        <Products />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
