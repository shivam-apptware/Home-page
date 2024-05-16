import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginLeft: "250px" }}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Message"
            variant="outlined"
            margin="normal"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
