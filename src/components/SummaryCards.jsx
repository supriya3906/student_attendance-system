function SummaryCards({ total, present, absent, percentage }) {
  return (
    <div className="summary-grid">

      <div className="summary-card">
        <span>Total Students</span>
        <h2>{total}</h2>
      </div>

      <div className="summary-card present-card">
        <span>Present</span>
        <h2>{present}</h2>
      </div>

      <div className="summary-card absent-card">
        <span>Absent</span>
        <h2>{absent}</h2>
      </div>

      <div className="summary-card percentage-card">
        <span>Attendance</span>
        <h2>{percentage}%</h2>
      </div>

    </div>
  );
}

export default SummaryCards;