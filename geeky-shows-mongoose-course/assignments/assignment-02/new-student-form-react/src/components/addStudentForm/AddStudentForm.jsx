import React, { useState } from "react";
import axios from "axios";

const AddStudentForm = ({ setFormNewData }) => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    fees: "",
  });

  // State to handle success or error messages
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API call to post data
      const response = await axios.post(
        "http://localhost:3001/add-new-student",
        {
          name: formData.name,
          age: parseInt(formData.age), // Convert age to a number
          fees: parseFloat(formData.fees), // Convert fees to a number
        }
      );

      // Handle success response
      setResponseMessage(`Success: ${response.data.message}`);

      setFormNewData(response.data);
    } catch (error) {
      // Handle error response
      setResponseMessage(
        error.response?.data?.message ||
          "An error occurred while submitting the form"
      );
    }

    // Clear form data after submission
    setFormData({
      name: "",
      age: "",
      fees: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
      }}
    >
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter name"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Age Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            placeholder="Enter age"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        {/* Fees Field */}
        <div style={{ marginBottom: "15px" }}>
          <label>Fees:</label>
          <input
            type="number"
            name="fees"
            step="0.01"
            value={formData.fees}
            onChange={handleChange}
            required
            placeholder="Enter fees"
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>

        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <p
          style={{
            marginTop: "20px",
            color: responseMessage.startsWith("Success") ? "green" : "red",
          }}
        >
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default AddStudentForm;
