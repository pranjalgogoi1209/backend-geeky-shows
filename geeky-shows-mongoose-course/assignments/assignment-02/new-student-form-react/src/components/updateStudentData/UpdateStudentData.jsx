import React, { useState } from "react";
import axios from "axios";

const UpdateStudentData = ({ student, setShowUpdateForm, setFormNewData }) => {
  // Destructure initial student data
  const {
    _id: id,
    name: initialName,
    age: initialAge,
    fees: initialFees,
  } = student;

  // State for form fields
  const [formData, setFormData] = useState({
    name: initialName,
    age: initialAge,
    fees: initialFees,
  });

  // State to track if any field has been changed
  const [hasChanged, setHasChanged] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      // Check if any field has been changed
      const hasAnyFieldChanged =
        updatedData.name !== initialName ||
        updatedData.age !== initialAge ||
        updatedData.fees !== initialFees;

      setHasChanged(hasAnyFieldChanged);
      return updatedData;
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);

    try {
      // Send PATCH request to update data
      const response = await axios.patch(
        `http://localhost:3001/update-new-student`, // Replace with your actual endpoint
        {
          id: id,
          name: formData.name,
          age: formData.age,
          fees: formData.fees,
        }
      );

      alert("Record updated successfully!");
      setShowUpdateForm(false);
      setFormNewData(formData);
    } catch (error) {
      console.error(error);
      alert("Failed to update record. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: "fixed",
        top: "0",
        left: "10%",
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={() => setShowUpdateForm(false)}
        style={{
          float: "right",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
      >
        X
      </button>
      <h2>Edit Student</h2>

      {/* Name Field */}
      <div style={{ marginBottom: "15px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
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
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Fees Field */}
      <div style={{ marginBottom: "15px" }}>
        <label>Fees:</label>
        <input
          type="number"
          name="fees"
          value={formData.fees}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      {/* Update Button */}
      <button
        type="submit"
        disabled={!hasChanged} // Disable if no fields have been changed
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: hasChanged ? "blue" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: hasChanged ? "pointer" : "not-allowed",
        }}
      >
        Update
      </button>
    </form>
  );
};

export default UpdateStudentData;
