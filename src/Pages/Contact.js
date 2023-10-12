import React, { useEffect, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [formDataArray, setFormDataArray] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem("formDataArray");
    if (store) {
      setFormDataArray(JSON.parse(store));
    }
  }, []);

  const handleSubmit = () => {
    const newFormDataArray = [...formDataArray, formData];
    setFormData(newFormDataArray);
    localStorage.setItem("formDataArray", JSON.stringify(newFormDataArray));
    setFormData({
      name: "",
      email: "",
      subject: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
