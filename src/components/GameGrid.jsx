import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import GameModal from './GameModal';

const GameGrid = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const images = import.meta.glob('../images/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
  });

  const games = [
      {
          id: 1,
          title: "Sea of Thieves",
          publisher: "Rare",
          coverImage: images['../images/SoT.png'],
          videoUrl: "https://www.youtube.com/embed/D0k4yLqgMd4",
          description: "I am actively working on Sea of Thieves.",
          role: "Programmer",
          technologies: ["Unreal Engine 4", "C++", "Azure Cloud Services", "Xbox Live Services"],
          year: "2024"
      },
      {
          id: 2,
          title: "The Elder Scrolls IV: Oblivion Remastered",
          publisher: "Bethesda Game Studios",
          coverImage: images['../images/OR.png'],
          videoUrl: "https://www.youtube.com/embed/wFJ3PZuAjK4",
          description: "During my time working on Oblivion Remastered, I was responsible for profiling and optimising performance issues for the Xbox platform, and identifying memory leaks to improve game stability.",
          role: "Associate Engine Programmer",
          technologies: ["Unreal Engine 5", "Gamebryo", "C++", "Xbox Dev Kit", "Unreal Insights"],
          year: "2024"
      },

  ];

    const handleGameClick = (game) => {
        setSelectedGame(game);
        setIsModalOpen(true);
    };

    // Generate the appropriate grid class based on number of games
    const getGridClass = () => {
        const numberOfGames = games.length;
        const maxColumns = Math.min(numberOfGames, 5);

        // Start with mobile layout (1 column)
        let gridClass = 'grid grid-cols-1';

        // Add responsive breakpoints
        switch (maxColumns) {
            case 2:
                gridClass += ' sm:grid-cols-2';
                break;
            case 3:
                gridClass += ' sm:grid-cols-2 md:grid-cols-3';
                break;
            case 4:
                gridClass += ' sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
                break;
            case 5:
                gridClass += ' sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5';
                break;
            default:
                // For single column, we already have grid-cols-1
                break;
        }

        return gridClass;
    };

    return (
        <div className="container mx-auto mt-8 flex justify-center">
            <div className={`${getGridClass()} gap-4 w-fit`}>
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        game={game}
                        onClick={() => handleGameClick(game)}
                    />
                ))}
            </div>

            {isModalOpen && (
                <GameModal
                    game={selectedGame}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};

export default GameGrid;
