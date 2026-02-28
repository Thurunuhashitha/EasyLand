import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LandCard from '../../components/LandCard/LandCard';
import './Home.css';

const STEPS = [
  ['01', 'Browse Listings', 'Explore hundreds of verified land listings across Sri Lanka, filtered by location, size, and price.'],
  ['02', 'Contact Owner', 'Reach out directly to land owners via phone or WhatsApp — no middlemen, no hidden fees.'],
  ['03', 'Seal the Deal', 'Meet on-site, verify documents, and complete your purchase with full confidence.'],
  ['04', 'List Your Land', 'Have land to sell? Add your listing in minutes and connect with thousands of genuine buyers.'],
];

const FEATURES = [
  { icon: '🚫', title: 'Zero Broker Fees', desc: 'Keep more money in your pocket. No commissions, no hidden charges — ever.' },
  { icon: '💬', title: 'Direct Communication', desc: 'Talk directly to sellers. Real conversations, real answers, faster decisions.' },
  { icon: '🔍', title: 'Transparent Pricing', desc: 'Every listing shows the exact price. No guessing, no back-and-forth.' },
  { icon: '✅', title: 'Verified Sellers', desc: 'All sellers are identity-verified so you deal with confidence every time.' },
];

const Home = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLands = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/land/getall');
        const mapped = res.data.map((land) => ({
          id: land.id,
          img: `http://localhost:3000${land.image}`,
          video: `http://localhost:3000${land.video}`,
          name: land.owner,
          owner: land.owner,
          contact: land.contact,
          location: land.location,
          size: land.size,
          price: land.price,
          tag: land.type,
          description: land.description,
        }));
        setLands(mapped);
      } catch (err) {
        console.error('❌ Failed to fetch lands:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchLands();
  }, []);

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Sri Lanka's Trusted Land Marketplace
          </div>
          <h1>
            Buy &amp; Sell Land<br />
            <em>Across Sri Lanka</em><br />
            <span className="hero-h1-accent">With Zero Broker Fees</span>
          </h1>
          <p className="hero-sub">
            Direct communication, transparent pricing, verified sellers.
            EasyLand is Sri Lanka's premier direct land marketplace — connecting
            buyers with owners, faster and cheaper than ever before.
          </p>
          <div className="hero-actions">
            <Link to="/allLand" className="btn-primary">Browse All Lands</Link>
            <Link to="/addLand" className="btn-outline">List Your Land</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-val">{lands.length}</div>
              <div className="stat-label">Active Listings</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">9</div>
              <div className="stat-label">Provinces Covered</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">0%</div>
              <div className="stat-label">Broker Fees</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-val">98%</div>
              <div className="stat-label">Satisfied Clients</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </div>

      {/* ── WHY EASYLAND ── */}
      <div className="section why-section">
        <div className="why-inner">
          <div className="why-left">
            <div className="section-tag">Why EasyLand</div>
            <h2 className="section-title">
              The Smarter Way to<br />
              <em>Buy or Sell Land</em>
            </h2>
            <p className="section-sub">
              EasyLand eliminates brokers and connects buyers directly with
              verified sellers — making land transactions faster, cheaper,
              and more transparent across Sri Lanka.
            </p>
            <Link to="/allLand" className="btn-primary" style={{ marginTop: 32, display: 'inline-block' }}>
              Start Browsing →
            </Link>
          </div>
          <div className="why-right">
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <div className="section how-section">
        <div className="section-tag">How It Works</div>
        <div className="section-title">
          Buy or Sell Land<br />in Simple Steps
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
          Explore some of our newest and most sought-after land listings
          directly from verified owners — no agents involved.
        </p>

        <div className="lands-grid">
          {loading ? (
            <p>Loading lands...</p>
          ) : (
            lands.slice(0, 3).map((land) => <LandCard key={land.id} land={land} />)
          )}
        </div>

        <div className="featured-cta">
          <Link to="/allLand" className="btn-primary">
            View All Listings →
          </Link>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="cta-banner">
        <div className="cta-inner">
          <h2>Have Land to Sell?</h2>
          <p>List for free in minutes. Reach thousands of genuine buyers directly — no broker, no commission.</p>
          <Link to="/addLand" className="btn-cta-white">List Your Land Now →</Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;