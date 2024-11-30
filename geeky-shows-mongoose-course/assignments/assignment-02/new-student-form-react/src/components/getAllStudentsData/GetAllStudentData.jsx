import React, { useEffect, useState } from "react";
import axios from "axios";

const GetAllStudentData = ({
  formData,
  setSingleUserDataToUpdate,
  setShowUpdateForm,
}) => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/get-all-students"
        );
        setData(response.data.data); // Assume response.data contains an array of objects with name, age, and fees
        setLoading(false);

        console.log(response);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };
    fetchData();
  }, [formData]);

  // Handle Edit Button Click
  const handleEdit = (student) => {
    // alert(`Edit button clicked for ID: ${student.name}`);
    setSingleUserDataToUpdate(student);
    setShowUpdateForm(true);
    // Logic for editing the row (e.g., open a form with pre-filled data)
  };

  // Handle Delete Button Click
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (confirmDelete) {
      // Call API to delete data
      axios
        .delete("http://localhost:3001/delete-new-student", {
          data: { id }, // Sending id in the body
        })
        .then(() => {
          //   alert("Record deleted successfully!");
          setData(data.filter((item) => item._id !== id)); // Remove the item from the table
        })
        .catch((err) => {
          console.error(err);
          alert("Failed to delete record.");
        });
    }
  };

  console.log(data);

  // Render Table
  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Data</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}
        >
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Fees</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((student, index) => (
                <tr key={student._id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{String(student.fees)}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(student)}
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(student._id)}
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        border: "none",
                        padding: "5px 10px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GetAllStudentData;
