import { useState } from 'react'
import { TAG_COLORS } from '../../data/lands'
import './LandCard.css'

const LandCard = ({ land }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── CARD ── */}
      <div className="land-card">
        <div className="land-card-img">
          <img src={land.img} alt={land.name} />
          <span
            className="land-tag"
            style={{ background: TAG_COLORS[land.tag] || '#888' }}
          >
            {land.tag}
          </span>
          <span className="land-price">{land.price}</span>
        </div>

        <div className="land-card-body">
          <h3>{land.name}</h3>
          <div className="land-location">📍 {land.location}</div>
          <p className="land-desc">{land.description}</p>

          <div className="land-meta">
            <div className="land-size">
              {land.size} <span>Perch</span>
            </div>
            <button className="btn-view" onClick={() => setOpen(true)}>
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="modal">
              <img src={land.img} alt={land.name} className="modal-img" />

              <div className="modal-body">
                <span
                  className="modal-tag"
                  style={{ background: TAG_COLORS[land.tag] }}
                >
                  {land.tag}
                </span>
                <h2>{land.name}</h2>
                <div className="land-location">📍 {land.location}</div>

                <div className="modal-grid">
                  <div className="modal-field">
                    <div className="modal-field-label">Size</div>
                    <div className="modal-field-val">{land.size} Perch</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Price</div>
                    <div className="modal-field-val">{land.price}</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Owner</div>
                    <div className="modal-field-val">{land.owner}</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Contact</div>
                    <div className="modal-field-val">{land.contact}</div>
                  </div>
                </div>

                <p className="modal-desc">{land.description}</p>

                <div className="modal-actions">
                  <a href={`tel:${land.contact}`} className="btn-call">
                    📞 Call Owner
                  </a>
                  <a
                    href={`https://wa.me/94${land.contact.slice(1)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <button className="modal-close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default LandCard
