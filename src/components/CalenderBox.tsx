import calenderBox from '../styles/calenderBox.module.css'
import {getNameofMonth,daysOfWeek} from '../utility/calenderMetaData'
function CalenderBox() {
  const date = new Date();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  

  return (
    <div className={calenderBox.calendar}>
      <div className={calenderBox.header}>
        <h1>{getNameofMonth(date.getMonth())} {date.getFullYear()}</h1>
      </div>
      <div className={calenderBox.weekdays}>
      {daysOfWeek.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className={calenderBox.days}>
        {days.map((day) => (
          <div className={day > date.getDay() ? calenderBox.dayActive : calenderBox.day } key={day}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalenderBox;
