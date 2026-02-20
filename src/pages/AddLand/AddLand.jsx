import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './AddLand.css'

const INITIAL_FORM = {
  name: '',
  contact: '',
  location: '',
  size: '',
  price: '',
  type: 'Residential',
  description: '',
}

const AddLand = () => {
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.contact || !form.location || !form.size) {
      alert('⚠️ Please fill in all required fields (Name, Contact, Location, Size).')
      return
    }
    alert(
      `✅ Your land listing "${form.name}" has been submitted successfully!\n\nOur team will review and publish it within 24 hours.`
    )
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>List Your Land</h1>
        <p>Fill in the details below and connect with thousands of buyers across Sri Lanka</p>
      </div>

      <div className="form-section">
        <div className="form-card">

          {/* Row: Name + Contact */}
          <div className="form-row">
            <div className="form-group">
              <label>Owner Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Suresh Perera"
              />
            </div>
            <div className="form-group">
              <label>Contact Number *</label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="e.g. 0771234567"
                type="tel"
              />
            </div>
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location / Address *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="e.g. Kandy, Central Province"
            />
          </div>

          {/* Row: Size + Price */}
          <div className="form-row">
            <div className="form-group">
              <label>Land Size (Perch) *</label>
              <input
                name="size"
                value={form.size}
                onChange={handleChange}
                placeholder="e.g. 40"
                type="number"
                min="1"
              />
            </div>
            <div className="form-group">
              <label>Asking Price (Rs.)</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="e.g. 1,200,000"
              />
            </div>
          </div>

          {/* Land Type */}
          <div className="form-group">
            <label>Land Type</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option>Residential</option>
              <option>Agricultural</option>
              <option>Commercial</option>
              <option>Coastal</option>
              <option>Premium</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your land — road access, utilities, nearby facilities, unique features..."
            />
          </div>

          {/* Photo Upload */}
          <div className="form-group">
            <label>Photos</label>
            <div
              className="upload-zone"
              onClick={() =>
                alert('📸 Photo upload will be connected to your backend/storage service.')
              }
            >
              <div className="upload-icon">🖼️</div>
              <p>
                <strong>Click to upload photos</strong>
                <br />
                JPG, PNG — up to 10 images
              </p>
            </div>
          </div>

          {/* Video Upload */}
          <div className="form-group">
            <label>Video Tour (optional)</label>
            <div
              className="upload-zone"
              onClick={() =>
                alert('🎥 Video upload will be connected to your backend/storage service.')
              }
            >
              <div className="upload-icon">🎥</div>
              <p>
                <strong>Click to upload a video</strong>
                <br />
                MP4, MOV — up to 200 MB
              </p>
            </div>
          </div>

          <button className="btn-submit" onClick={handleSubmit}>
            Submit Land Listing →
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default AddLand
