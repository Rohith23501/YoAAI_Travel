// src/components/Footer/Footer.jsx
import React from 'react';
import './footer.styles.scss'; // Import the dedicated SCSS file

/**
 * Footer Component
 * Renders the bottom section of the website, typically found on the home page.
 * Includes copyright, navigation links, and social media placeholders.
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content-wrapper">
        {/* Section 1: Brand/Copyright */}
        <div className="footer-section footer-brand">
          <h3 className="footer-logo">Your Adventure Helper</h3>
          <p className="footer-tagline">Making Every Journey Extraordinary.</p>
          <p className="footer-copyright">
            &copy; {currentYear} Your Adventure Helper. All rights reserved.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section footer-links">
          <h4 className="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/blog" className="footer-link">Explore</a></li>
            <li><a href="/about-us" className="footer-link">About Us</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/faq" className="footer-link">FAQs</a></li>
          </ul>
        </div>

        {/* Section 3: Contact & Social */}
        <div className="footer-section footer-contact-social">
          <h4 className="footer-heading">Connect With Us</h4>
          <p className="footer-contact-info">
            Email: <a href="mailto:youradventurehelper@gmail.com" className="footer-link">youraventurehelper@gmail.com</a>
          </p>
          <div className="social-icons">
            {/* Placeholder icons. In a real app, use actual SVG or icon library components */}
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C17.34 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.993 5.378c.846-.073 1.637.288 2.233.882.355-.068.7-.156 1.037-.282a.855.855 0 01-.137.498c-.333.344-.657.69-.974 1.037a.855.855 0 01-.497.137c-.378 0-.742-.14-.997-.394-.256-.255-.395-.62-.395-.998a.855.855 0 01.137-.497zm-1.026-.068c.245-.052.484.04.697.195.213.155.353.385.385.637.032.253-.06.495-.195.708-.135.213-.365.353-.618.385-.253.032-.495-.06-.708-.195-.213-.135-.353-.365-.385-.618-.032-.253.06-.495.195-.708.135-.213.365-.353.618-.385zM8 8c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm-6 4c0-5.523 4.477-10 10-10S22 6.477 22 12s-4.477 10-10 10S2 17.523 2 12zm2-2c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6zm12 2c0 .829-.37 1.562-.958 2.067-.589.505-1.343.793-2.147.793-.804 0-1.558-.288-2.147-.793-.589-.505-.958-1.238-.958-2.067 0-.829.37-1.562.958-2.067.589-.505 1.343-.793 2.147-.793.804 0 1.558.288 2.147.793.589.505.958.829.958 2.067z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C8.686 2 6.002 4.686 6.002 8.002v.003h-.002A5.998 5.998 0 000 14.004a5.998 5.998 0 006.002 6.002h.003v.002C9.314 22 12 19.314 12 16.002s-2.686-6-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6v.003h-.002A5.998 5.998 0 0018.004 0a5.998 5.998 0 00-6.002 6.002v.003zm0 4.002a2 2 0 100 4 2 2 0 000-4zm-6 2a.999.999 0 110 2 .999.999 0 010-2zm-2 6a3.998 3.998 0 014-4h.002a3.998 3.998 0 014 4v.002a3.998 3.998 0 01-4 4h-.002a3.998 3.998 0 01-4-4v-.002zm12 2a.999.999 0 110 2 .999.999 0 010-2z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;