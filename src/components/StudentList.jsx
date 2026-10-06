function StudentList({
  students,
  onToggleAttendance,
  onDelete
}) {

  return (
    <div className="student-list">

      <h2>Student Attendance</h2>

      {students.length === 0 ? (
        <p className="empty-message">
          No students added yet.
        </p>
      ) : (

        students.map((student) => (

          <div className="student-item" key={student.id}>

            <div className="student-info">

              <h3>{student.name}</h3>

              <p>
                Register No: {student.registerNo}
              </p>

            </div>

            <div className="student-actions">

              <button
                className={
                  student.status === "Present"
                    ? "present-button"
                    : "absent-button"
                }
                onClick={() =>
                  onToggleAttendance(student.id)
                }
              >
                {student.status}
              </button>

              <button
                className="delete-button"
                onClick={() =>
                  onDelete(student.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))
      )}

    </div>
  );
}

export default StudentList;