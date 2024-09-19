import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsRunning(false);
            return;
          }
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <div className="container">
      <div className="timer">
        <h1>Pomodoro Timer</h1>

        <div className="timer-display">
          <span className="timer-part">{String(minutes).padStart(2, '0')}</span>
          <span className="timer-separator">:</span>
          <span className="timer-part">{String(seconds).padStart(2, '0')}</span>
        </div>

        <div id="buttons">
          <button onClick={handleStart}>START</button>
          <button onClick={handleStop}>STOP</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
