import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LandCard from '../../components/LandCard/LandCard'
import { SAMPLE_LANDS } from '../../data/lands'
import './Home.css'

const STEPS = [
  ['01', 'Browse Listings',  'Explore hundreds of verified land listings across Sri Lanka, filtered by location, size, and price.'],
  ['02', 'Contact Owner',    'Reach out directly to land owners via phone or WhatsApp — no middlemen, no hidden fees.'],
  ['03', 'Seal the Deal',    'Meet on-site, verify documents, and complete your purchase with full confidence.'],
  ['04', 'List Your Land',   'Have land to sell? Add your listing in minutes and connect with thousands of genuine buyers.'],
]

const Home = () => {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-badge">Sri Lanka's Trusted Land Marketplace</div>
        <h1>
          Find Your<br />
          <em>Perfect Land</em><br />
          With Ease
        </h1>
        <p className="hero-sub">
          Discover premium plots, agricultural land, and residential sites
          across Sri Lanka. Simple listings, verified owners, real opportunities.
        </p>
        <div className="hero-actions">
          <Link to="/allLand" className="btn-primary">Browse All Lands</Link>
          <Link to="/addLand" className="btn-outline">List Your Land</Link>
        </div>

        <div className="hero-stats">
          <div>
            <div className="stat-val">150+</div>
            <div className="stat-label">Active Listings</div>
          </div>
          <div>
            <div className="stat-val">9</div>
            <div className="stat-label">Provinces Covered</div>
          </div>
          <div>
            <div className="stat-val">98%</div>
            <div className="stat-label">Satisfied Clients</div>
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="section how-section">
        <div className="section-tag">How It Works</div>
        <div className="section-title">
          Buy or Sell Land<br />in 3 Simple Steps
        </div>
        <div className="steps-grid">
          {STEPS.map(([num, title, desc]) => (
            <div className="step-card" key={num}>
              <div className="step-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED LISTINGS ── */}
      <div className="section featured-section">
        <div className="section-tag">Featured Listings</div>
        <div className="section-title">Recently Added Lands</div>
        <p className="section-sub" style={{ marginBottom: 48 }}>
          Explore some of our newest and most sought-after land listings.
        </p>

        <div className="lands-grid">
          {SAMPLE_LANDS.slice(0, 3).map((land) => (
            <LandCard key={land.id} land={land} />
          ))}
        </div>

        <div className="featured-cta">
          <Link to="/allLand" className="btn-primary">
            View All Listings →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home