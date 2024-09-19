// src/components/Footer.jsx
import React from 'react';
import './footer.scss'; // Assuming you have a SCSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left">SIH-1679</div>
        <div className="right">
          <a href="/terms-of-use">Terms of Use</a>
          <span> | </span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
