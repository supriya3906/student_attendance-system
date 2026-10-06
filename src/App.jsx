import { useEffect, useState } from "react";

import SummaryCards from "./components/SummaryCards";
import AttendanceForm from "./components/AttendanceForm";
import StudentList from "./components/StudentList";

import "./App.css";

function App() {

  const [students, setStudents] = useState(() => {

    const savedStudents =
      localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );

  }, [students]);

  const addStudent = (student) => {

    setStudents((previousStudents) => [
      student,
      ...previousStudents
    ]);

  };

  const toggleAttendance = (id) => {

    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present"
            }
          : student
      )
    );

  };

  const deleteStudent = (id) => {

    setStudents((previousStudents) =>
      previousStudents.filter(
        (student) => student.id !== id
      )
    );

  };

  const total = students.length;

  const present = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absent = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const percentage =
    total === 0
      ? 0
      : ((present / total) * 100).toFixed(1);

  return (

    <div className="app">

      <header className="topbar">

        <div className="brand">

          <div className="brand-mark">
            A
          </div>

          <div>
            <span className="eyebrow">
              Student Management
            </span>

            <strong>
              AttendanceHub
            </strong>
          </div>

        </div>

        <span className="status-pill">
          Attendance Dashboard
        </span>

      </header>

      <main>

        <section className="intro">

          <div>

            <span className="eyebrow">
              Manage attendance
            </span>

            <h1>
              Track every student's
              <span> attendance.</span>
            </h1>

            <p>
              Add students, mark attendance,
              and monitor the overall attendance
              percentage easily.
            </p>

          </div>

        </section>

        <SummaryCards
          total={total}
          present={present}
          absent={absent}
          percentage={percentage}
        />

        <div className="workspace-grid">

          <section className="calculator-panel">

            <div className="panel-heading">

              <div>

                <span className="step-label">
                  Step 01
                </span>

                <h2>
                  Add Student
                </h2>

              </div>

              <span className="subject-counter">
                {total} students
              </span>

            </div>

            <AttendanceForm
              onAddStudent={addStudent}
            />

          </section>

          <section className="transactions-panel">

            <StudentList
              students={students}
              onToggleAttendance={
                toggleAttendance
              }
              onDelete={deleteStudent}
            />

          </section>

        </div>

      </main>

      <footer>
        AttendanceHub · Student Attendance
        Management System
      </footer>

    </div>
  );
}

export default App;