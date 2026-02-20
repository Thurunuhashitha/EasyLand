import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeMenu}>
          <div className="nav-logo-icon">E</div>
          <span className="nav-logo-text">
            Easy<span>Land</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/allLand" className={({ isActive }) => isActive ? 'active' : ''}>
              All Lands
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/addLand" className="nav-cta">
              + List Land
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

      {/* Mobile drawer */}
      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <div className="nav-mobile-logo">
          <div className="nav-logo-icon">E</div>
          <span className="nav-logo-text">Easy<span>Land</span></span>
        </div>
        <ul>
          <li><NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/allLand" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>All Lands</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/addLand" onClick={closeMenu} className="nav-cta-mobile">+ List Land</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar