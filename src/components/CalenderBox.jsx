import React from "react";
import calenderBox from '../styles/calenderBox.module.css'

function CalenderBox() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = new Date().getDate();

  return (
    <div className={calenderBox.calendar}>
      <div className={calenderBox.header}>
        <h1>April 2023</h1>
      </div>
      <div className={calenderBox.weekdays}>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className={calenderBox.days}>
        {days.map((day) => (
          <div className={day > today ? calenderBox.dayActive : calenderBox.day } key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalenderBox;
