import React from "react";

function CalenderBox() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <div className="calendar">
      <div className="header">
        <h1>April 2023</h1>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">
        {days.map((day) => (
          <div className={day > today ? "day-active" : "day"} key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalenderBox;
