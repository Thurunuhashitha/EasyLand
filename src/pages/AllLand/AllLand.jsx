import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import LandCard from '../../components/LandCard/LandCard'
import { SAMPLE_LANDS } from '../../data/lands'
import './AllLand.css'

const TAGS = ['All', 'Premium', 'Agricultural', 'Residential', 'Coastal', 'Commercial']

const AllLand = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('All')

  const filtered = SAMPLE_LANDS.filter((land) => {
    const matchSearch =
      land.name.toLowerCase().includes(search.toLowerCase()) ||
      land.location.toLowerCase().includes(search.toLowerCase())
    const matchTag = filter === 'All' || land.tag === filter
    return matchSearch && matchTag
  })

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>All Land Listings</h1>
        <p>{SAMPLE_LANDS.length} properties available across Sri Lanka</p>
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
        {filtered.length > 0 ? (
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
  )
}

export default AllLand
