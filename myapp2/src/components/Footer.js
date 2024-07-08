import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h3>Contact Us</h3>
        <p>Email: info@ots.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>123, Laurier Ave</p>
      </div>
      <div className="follow-us">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a href="https://fr.linkedin.com/" target="_blank" aria-label="LinkedIn" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/?hl=fr" target="_blank" aria-label="Instagram" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/?lang=fr" target="_blank" aria-label="Twitter" className="social-logo" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="resources">
        <h3>Resources</h3>
        <Link to="/support">Support</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">FAQs</Link>
      </div>
    </footer>
  );
}

export default Footer;
