import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LandCard from '../../components/LandCard/LandCard';
import './AllLand.css';

const TAGS = ['All', 'Premium', 'Agricultural', 'Residential', 'Coastal', 'Commercial'];

const AllLand = () => {
  const [lands, setLands] = useState([]);        // lands from backend
  const [loading, setLoading] = useState(true);  // loading state
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchLands = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:3000/api/land/getall');

        const mappedLands = res.data.map((land) => ({
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

        setLands(mappedLands);
      } catch (err) {
        console.error('Full error:', err);
        console.error('Response:', err.response);
        console.error('Message:', err.message);
        alert('❌ Failed to fetch land listings');
      } finally {
        setLoading(false);
      }
    };

    fetchLands();
  }, []);

  const filtered = lands.filter((land) => {
    const matchSearch =
      land.name.toLowerCase().includes(search.toLowerCase()) ||
      land.location.toLowerCase().includes(search.toLowerCase());
    const matchTag = filter === 'All' || land.tag === filter;
    return matchSearch && matchTag;
  });

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>All Land Listings</h1>
        <p>{lands.length} properties available across Sri Lanka</p>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍  Search by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filter-search"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          {TAGS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* ── GRID ── */}
      <div className="all-land-section">
        {loading ? (
          <p className="loading-text">Loading listings...</p>
        ) : filtered.length > 0 ? (
          <div className="lands-grid">
            {filtered.map((land) => (
              <LandCard key={land.id} land={land} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No listings found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default AllLand;