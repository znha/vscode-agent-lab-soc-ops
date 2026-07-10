import { useState } from 'react';

interface WelcomeTourProps {
  onClose: () => void;
}

export function WelcomeTour({ onClose }: WelcomeTourProps) {
  const steps = [
    'Welcome to Bingo Mixer — a social bingo for mixers.',
    'Start a new game from the Start Game button.',
    'Find people who match the squares and tap to mark them.',
    'Get 5 in a row to win and enjoy the Bingo celebration!'
  ];
  const [index, setIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div className="relative bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
        <h3 className="font-bold text-lg mb-2">Tour ({index + 1}/{steps.length})</h3>
        <p className="text-gray-600 mb-4">{steps[index]}</p>

        <div className="flex justify-between">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className="text-sm text-gray-600 px-3 py-2 rounded hover:bg-gray-100"
          >
            Back
          </button>

          {index < steps.length - 1 ? (
            <button
              onClick={() => setIndex((i) => i + 1)}
              className="bg-accent text-white px-3 py-2 rounded"
            >
              Next
            </button>
          ) : (
            <button onClick={onClose} className="bg-accent text-white px-3 py-2 rounded">Done</button>
          )}
        </div>
      </div>
    </div>
  );
}
