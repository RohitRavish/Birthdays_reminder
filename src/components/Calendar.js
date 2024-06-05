import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import './Calendar.css'; // Add this line for custom styles

const BirthdaysCalendar = ({ birthdays, onDateClick }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateClick(format(newDate, 'yyyy-MM-dd'));
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = format(date, 'yyyy-MM-dd');
      return birthdays.some(birthday => birthday.date === formattedDate) ? 'highlight' : null;
    }
  };

  return (
    <div>
      <Calendar
        value={date}
        onChange={handleDateChange}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default BirthdaysCalendar;
