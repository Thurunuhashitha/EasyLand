import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo">
        <div className="nav-logo-icon">E</div>
        <span className="nav-logo-text">
          Easy<span>Land</span>
        </span>
      </NavLink>

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
    </nav>
  )
}

export default Navbar
