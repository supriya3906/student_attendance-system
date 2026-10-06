import { useState } from "react";

function AttendanceForm({ onAddStudent }) {

  const [name, setName] = useState("");
  const [registerNo, setRegisterNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !registerNo) {
      alert("Please enter student details");
      return;
    }

    onAddStudent({
      id: Date.now(),
      name,
      registerNo,
      status: "Present"
    });

    setName("");
    setRegisterNo("");
  };

  return (
    <form className="attendance-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Register Number"
        value={registerNo}
        onChange={(e) => setRegisterNo(e.target.value)}
      />

      <button type="submit">
        Add Student
      </button>

    </form>
  );
}

export default AttendanceForm;