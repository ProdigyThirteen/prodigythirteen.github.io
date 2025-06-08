// components/GameModal.jsx
import React from 'react';

const GameModal = ({ game, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4"
         onClick={handleBackdropClick}>
      <div className="bg-stone-800/95 rounded-lg p-8 max-w-4xl w-full mx-4 relative
                    border-2 border-neutral-700 shadow-[0_0_15px_rgba(0,0,0,0.3)]
                    ring-1 ring-white/10 text-zinc-100">
        <button
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 z-10"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl font-bold text-zinc-100">{game.title}</h2>
            <h4 className="text-xl text-zinc-300 mt-1">{game.publisher}</h4>
          </div>

          <div className="w-full aspect-video">
            <iframe
              src={game.videoUrl}
              title={`${game.title} Gameplay`}
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-200">Description</h3>
                <p className="text-zinc-300">{game.description}</p>
              </div>

            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-200">My Role</h3>
                <p className="text-zinc-300">{game.role}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-200">Tech</h3>
                <div className="flex flex-wrap gap-2">
                  {game.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-zinc-700 text-zinc-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModal;