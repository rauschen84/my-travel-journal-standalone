import { useState, useEffect } from "react";

export default function EntryForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    id: null,
    location: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    description: "",
    images: []
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const fileArray = Array.from(files).map(file => URL.createObjectURL(file));
      setFormData(prev => ({ ...prev, images: fileArray }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.location && formData.country) {
      onSubmit(formData);
      setFormData({ id: null, location: "", country: "", description: "", images: [] });
    }
  };

  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country"
        required
      />
      <label>
        Arrival Date:
        <input
          type="date"
          name="arrivalDate"
          value={formData.arrivalDate || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Departure Date:
        <input
          type="date"
          name="departureDate"
          value={formData.departureDate || ""}
          onChange={handleChange}
        />
      </label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        onChange={handleChange}
      />
      <button type="submit">
        {formData.id ? "Update Entry" : "Add Entry"}
      </button>
    </form>
  );
}
