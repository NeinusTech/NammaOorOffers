import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            &copy; {new Date().getFullYear()} <strong>Namma Ooru Offers</strong>. All rights reserved.
          </p>
          <nav className="legal-links" aria-label="Footer Legal Links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
