import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("Form submitted successfully ✅");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    setSuccess("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <textarea
          name="message"
          placeholder="Enter Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default ContactForm;