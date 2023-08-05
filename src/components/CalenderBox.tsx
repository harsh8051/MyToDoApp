import { useState } from 'react';
import calenderBox from '../styles/calenderBox.module.css';
import { Link } from 'react-router-dom';
import { getNameofMonth, daysOfWeek } from '../utility/calenderMetaData';

type SelectedDayType = number | null; // Define the type for selectedDay


function CalenderBox() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the total days in the current month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day of the week of the first day of the current month
  const [selectedDay, setSelectedDay] = useState<SelectedDayType>(null); 

  // Create an array to hold the days of the current month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Create an array to hold empty cells before the first day of the month
  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, ) => null);

  const handleDayClick = (day:number) => {
    // Update the selected day when a day is clicked
    setSelectedDay(day);
  };

  return (
    <div className={calenderBox.calendar}>
      <div className={calenderBox.header}>
         
        <h1>
          {getNameofMonth(month)} {year}
        </h1>
      </div>
      <div className={calenderBox.weekdays}>
        {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className={calenderBox.days}>
        {emptyCells.map((index) => (
          <div key={`empty_${index}`} className={calenderBox.emptyDay}>
            {/* Empty cells */}
          </div>
        ))}
        {days.map((day) => (
                <Link
                //to={`/tasks/${year}/${month + 1}/${day}`} // Assuming your task list route is of the format "/tasks/year/month/day"
                to={`/tasklist`}
                key={`day_${day}`}
                onClick={() => handleDayClick(day)}
              >
                <div
                  className={`${day > date.getDate() ? calenderBox.dayActive : calenderBox.day} ${
                    day === selectedDay ? calenderBox.selectedDay : ''
                  }`}
                >
                  <p className={calenderBox.dayFont}>{day}</p>
                </div>
              </Link>
        ))}
      </div>
    </div>
  );
}

export default CalenderBox;
