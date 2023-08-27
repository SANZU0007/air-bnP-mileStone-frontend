import React from 'react';
import './Footer.css'; // Import the CSS styles for the footer

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Site map</a>
        <a href="#">Discover</a>
      </div>
      <div className="footer__info">
        <p>&copy; 2023 Airbnb, Inc. All rights reserved</p>
        <p>Created by sanjay</p>
      </div>
    </footer>
  );
}

export default Footer;
