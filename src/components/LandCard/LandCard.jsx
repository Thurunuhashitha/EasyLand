import { useState } from 'react';
import './LandCard.css';

// Optional TAG_COLORS mapping — you can leave it empty if not needed
const TAG_COLORS = {
  Residential: '#4CAF50',
  Agricultural: '#FF9800',
  Commercial: '#2196F3',
  Coastal: '#00BCD4',
  Premium: '#9C27B0',
};

const LandCard = ({ land }) => {
  const [open, setOpen] = useState(false);

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
            {land.tag || 'N/A'}
          </span>
          <span className="land-price">{land.price ? `Rs. ${land.price}` : 'Price N/A'}</span>
        </div>

        <div className="land-card-body">
          <h3>{land.name || 'Unknown Owner'}</h3>
          <div className="land-location">📍 {land.location || 'Unknown Location'}</div>
          <p className="land-desc">{land.description || 'No description provided.'}</p>

          <div className="land-meta">
            <div className="land-size">{land.size || 'N/A'} <span>Perch</span></div>
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
                  style={{ background: TAG_COLORS[land.tag] || '#888' }}
                >
                  {land.tag || 'N/A'}
                </span>
                <h2>{land.name || 'Unknown Owner'}</h2>
                <div className="land-location">📍 {land.location || 'Unknown Location'}</div>

                <div className="modal-grid">
                  <div className="modal-field">
                    <div className="modal-field-label">Size</div>
                    <div className="modal-field-val">{land.size || 'N/A'} Perch</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Price</div>
                    <div className="modal-field-val">{land.price ? `Rs. ${land.price}` : 'N/A'}</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Owner</div>
                    <div className="modal-field-val">{land.owner || 'Unknown'}</div>
                  </div>
                  <div className="modal-field">
                    <div className="modal-field-label">Contact</div>
                    <div className="modal-field-val">{land.contact || 'N/A'}</div>
                  </div>
                </div>

                <p className="modal-desc">{land.description || 'No description provided.'}</p>

                <div className="modal-actions">
                  {land.contact && (
                    <>
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
                    </>
                  )}
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
  );
};

export default LandCard;