import React, { useState } from "react";

import AddStudentForm from "./components/addStudentForm/AddStudentForm";
import GetAllStudentData from "./components/getAllStudentsData/GetAllStudentData";
import UpdateStudentData from "./components/updateStudentData/UpdateStudentData";

export default function App() {
  const [formData, setFormData] = useState({});
  const [singleUserDataToUpdate, setSingleUserDataToUpdate] = useState({});
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  return (
    <div>
      <AddStudentForm setFormNewData={setFormData} />
      <GetAllStudentData
        formData={formData}
        setSingleUserDataToUpdate={setSingleUserDataToUpdate}
        setShowUpdateForm={setShowUpdateForm}
      />
      {showUpdateForm && (
        <UpdateStudentData
          student={singleUserDataToUpdate}
          setShowUpdateForm={setShowUpdateForm}
          setFormNewData={setFormData}
        />
      )}
    </div>
  );
}
