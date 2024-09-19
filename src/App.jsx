import { useState, useRef } from "react";
import "./App.css";

function App() {
  
  const [timeLeft, settimeLeft] = useState(4);

  const intervalRef = useRef(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      settimeLeft((prevTimeLeft) => {
        if(prevTimeLeft<=0){
          clearInterval(intervalRef.current)
          intervalRef.current =null
          const alarm = new Audio(
            "https://www.freespecialeffects.co.uk/soundfx/scifi/electronic.wav"
          );
          alarm.play();
          return 0
        }
        return prevTimeLeft - 1});
       
    }, 1000);
  }
function stopTimer(){
  clearInterval(intervalRef.current)

}
function resetTimer(){
  settimeLeft(1500)
}
  return (
    <>
     
        <div className="wrapper">
          <h1>Pomodoro Timer</h1>

          <div className="timer-display">
            <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
            <span>:</span>
            <span>{String(timeLeft % 60).padStart(2, "0")}</span>
          </div>

          <div className="buttons">
            <button className="start" onClick={startTimer}>START</button>
          
            <button className="stop" onClick={stopTimer}>STOP</button>
           
          </div>
        </div>
      
    </>
  );
}

export default App;
