import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Footer.css';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <footer className="footer-brutal">
      <div className="container">
        <div ref={ref} className={`footer-top reveal ${isVisible ? 'is-visible' : ''}`}>
          <div className="footer-brand">
            <h2 className="hover-magnetic">RADIANT</h2>
            <p>Elevating reality through brutal cosmetic engineering.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram" className="hover-magnetic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover-magnetic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4>The Collective</h4>
            <ul>
              <li><a href="#" className="hover-magnetic">Serums</a></li>
              <li><a href="#" className="hover-magnetic">Pigments</a></li>
              <li><a href="#" className="hover-magnetic">Extraction</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Intelligence</h4>
            <ul>
              <li><a href="#" className="hover-magnetic">Philosophy</a></li>
              <li><a href="#" className="hover-magnetic">Biotechnology</a></li>
              <li><a href="#" className="hover-magnetic">Transmissions</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>The List</h4>
            <p>Receive classified drops and early access.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="submit-btn hover-magnetic">Join</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RADIANT SECRECY. ALL RIGHTS RESERVED.</p>
          <div className="footer-bottom-links">
            <a href="#" className="hover-magnetic">Privacy</a>
            <a href="#" className="hover-magnetic">Terms</a>
          </div>
        </div>
      </div>
      <div className="massive-text" aria-hidden="true">RADIANT</div>
    </footer>
  );
};

export default Footer;
