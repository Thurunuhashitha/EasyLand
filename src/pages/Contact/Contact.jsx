import { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Contact.css'

const CONTACT_ITEMS = [
  ['📞', 'Phone',         '0705 656 164'],
  ['💬', 'WhatsApp',      '0705 656 164'],
  ['✉️', 'Email',         'easyland@gmail.com'],
  ['📍', 'Address',       'A/667 Deegagamini Road, Ampara'],
  ['🕐', 'Working Hours', 'Mon – Sat, 8:00 AM – 6:00 PM'],
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSend = () => {
    if (!form.name || !form.email || !form.msg) {
      alert('⚠️ Please fill in all fields before sending.')
      return
    }
    alert(
      `✅ Thank you, ${form.name}! Your message has been sent.\nWe'll get back to you within 24 hours.`
    )
    setForm({ name: '', email: '', msg: '' })
  }

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We're here to help — reach out anytime</p>
      </div>

      <div className="contact-wrap">

        {/* ── INFO CARD ── */}
        <div className="contact-info-card">
          <h2>Get In Touch</h2>
          <p>
            Have questions about a listing or need help with your account?
            Our team is ready to assist you.
          </p>

          {CONTACT_ITEMS.map(([icon, label, val]) => (
            <div className="contact-item" key={label}>
              <div className="contact-icon">{icon}</div>
              <div>
                <div className="contact-item-label">{label}</div>
                <div className="contact-item-val">{val}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── MESSAGE FORM ── */}
        <div className="contact-form-card">
          <h2>Send a Message</h2>
          <p>Fill in the form and we'll respond within 24 hours.</p>

          <div className="form-group">
            <label>Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="msg"
              value={form.msg}
              onChange={handleChange}
              placeholder="Tell us how we can help you..."
              style={{ minHeight: 140 }}
            />
          </div>

          <button className="btn-submit" onClick={handleSend}>
            Send Message →
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact
