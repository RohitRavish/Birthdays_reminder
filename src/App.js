// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BirthdaysCalendar from './components/Calendar';
import BirthdaysList from './components/BirthdaysList';
import FavoritesList from './components/FavoritesList';
import { format } from 'date-fns';

const App = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchBirthdays = async () => {
      try {
        const response = await axios.get('/birthdays.json');
        setBirthdays(response.data);
      } catch (error) {
        console.error('Error fetching the birthdays:', error);
      }
    };

    fetchBirthdays();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleAddToFavorites = (birthday) => {
    setFavorites([...favorites, birthday]);
  };

  const birthdaysForSelectedDate = birthdays.filter(birthday => birthday.date === selectedDate);

  return (
    <div>
      <h1>Birthdays Calendar</h1>
      <BirthdaysCalendar
        birthdays={birthdays}
        onDateClick={handleDateClick}
      />
      <BirthdaysList
        birthdays={birthdaysForSelectedDate}
        onAddToFavorites={handleAddToFavorites}
      />
      <FavoritesList
        favorites={favorites}
      />
    </div>
  );
};

export default App;
