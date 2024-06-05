import React from 'react';

const BirthdaysList = ({ birthdays, onAddToFavorites }) => {
  return (
    <div>
      <h2>Birthdays on Selected Date</h2>
      <ul>
        {birthdays.map((birthday, index) => (
          <li key={index}>
            {birthday.name} - {birthday.date}
            <button onClick={() => onAddToFavorites(birthday)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BirthdaysList;
