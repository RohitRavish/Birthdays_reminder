import React from 'react';

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2>Favorite Birthdays</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite.name} - {favorite.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
