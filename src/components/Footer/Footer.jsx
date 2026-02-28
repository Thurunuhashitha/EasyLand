import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand column */}
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            <div className="footer-logo-icon">E</div>
            <span>Easy<span>Land</span></span>
          </NavLink>
          <p className="footer-tagline">
            Sri Lanka's premier direct land marketplace. Zero broker fees,
            verified sellers, transparent pricing — all in one place.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="social-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="social-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allLand">All Listings</NavLink></li>
            <li><NavLink to="/addLand">List Your Land</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Land Types */}
        <div className="footer-col">
          <h4>Land Types</h4>
          <ul>
            <li><a href="#">Residential Plots</a></li>
            <li><a href="#">Agricultural Land</a></li>
            <li><a href="#">Commercial Land</a></li>
            <li><a href="#">Coastal Property</a></li>
            <li><a href="#">Premium Estates</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-icon">📍</span>
              <span>Ampara , Sri Lanka</span>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:+94771234567">+94 70 565 6164</a>
            </li>
            <li>
              <span className="contact-icon">✉️</span>
              <a href="mailto:hello@easyland.lk">easyland@gmail.com</a>
            </li>
            <li>
              <span className="contact-icon">🕐</span>
              <span>Mon–Sat, 8am – 6pm</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 <strong>EasyLand</strong>. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
        <p className="footer-made">Made with ❤️ for Sri Lanka</p>
      </div>
    </footer>
  )
}

export default Footer