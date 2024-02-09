import React, { useState, useEffect } from 'react';


const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-gray-200 p-6  text-center w-full max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-indigo-700">Stopwatch</h1>
        <p className="text-2xl mb-6 text-gray-700"> Time: {formatTime(elapsedTime)}</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={startStop}
            className={`${
              isRunning ? 'bg-red-500' : 'bg-green-500'
            } text-white px-6 py-3 rounded-md`}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="bg-blue-500 text-white px-6 py-3 rounded-md"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;