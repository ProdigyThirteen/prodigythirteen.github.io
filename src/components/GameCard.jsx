// components/GameCard.jsx
import React from 'react';

const GameCard = ({ game, onClick }) => {
  return (
      <div
          className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20"
          onClick={onClick}
      >
        <div className="w-60 h-90 rounded-lg overflow-hidden shadow-lg shadow-black/50">
          <img
              src={game.coverImage}
              alt={game.title}
              className="w-full h-full object-cover"
          />
        </div>
      </div>
  );
};

export default GameCard;