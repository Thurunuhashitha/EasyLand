import { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./AddLand.css";

const INITIAL_FORM = {
  name: "",
  contact: "",
  location: "",
  size: "",
  price: "",
  type: "Residential",
  description: "",
};

const AddLand = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [images, setImages] = useState([]); // array of File
  const [video, setVideo] = useState(null); // single File
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImagesChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.contact || !form.location || !form.size) {
      alert(
        "⚠️ Please fill in all required fields (Name, Contact, Location, Size)."
      );
      return;
    }

    const formData = new FormData();
    formData.append("owner", form.name);
    formData.append("contact", form.contact);
    formData.append("location", form.location);
    formData.append("size", form.size);
    formData.append("price", form.price);
    formData.append("description", form.description);

    // append single image (as per your backend table)
    if (images[0]) {
      formData.append("image", images[0]);
    }

    // append video
    if (video) {
      formData.append("video", video);
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/land", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(`✅ Land submitted successfully! ID: ${res.data.data.id}`);
      setForm(INITIAL_FORM);
      setImages([]);
      setVideo(null);
    } catch (err) {
      console.error(err);
      const errorMsg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        err.message ||
        "Unknown error";

      alert("❌ Error submitting land: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>List Your Land</h1>
        <p>
          Fill in the details below and connect with thousands of buyers across Sri
          Lanka
        </p>
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
                placeholder="e.g. Thurunu Hashitha"
              />
            </div>
            <div className="form-group">
              <label>Contact Number *</label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="e.g. 0701111111"
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
              placeholder="e.g. Ampara, Eastern Province"
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
                placeholder="e.g. 26"
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
            <label>Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImagesChange}
            />
            {images[0] && <p>Selected: {images[0].name}</p>}
          </div>

          {/* Video Upload */}
          <div className="form-group">
            <label>Video Tour (optional)</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
            />
            {video && <p>Selected: {video.name}</p>}
          </div>

          <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
            {loading ? "Submitting..." : "Submit Land Listing →"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddLand;