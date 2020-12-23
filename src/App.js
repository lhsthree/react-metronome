import React, { useState } from 'react';
import './App.css';
import click1 from './click1.wav';
import click2 from './click2.wav'; 

function App() {
  const [playing, setPlaying] = useState(false)
  const [count, setCount] = useState(0)
  const [bpm, setBpm] = useState(100)
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4)
  let click1 = new Audio("https://daveceddia.com/freebies/react-metronome/click1.wav")
  let click2 = new Audio("https://daveceddia.com/freebies/react-metronome/click2.wav")

  

 const handleBpmChange = event => {
  const bpm = event.target.value
  setBpm( bpm )
 }

 const startStop = () => {
   click1.play();
   console.log(click1)
  }


  return (

    <div className="metronome">
    <audio src="https://daveceddia.com/freebies/react-metronome/click2.wav" controls />
      <div className="bpm-slider">
        <div>{bpm} BPM</div>
        <input 
          type="range" 
          min="60" 
          max="240" 
          value={bpm}
          onChange={handleBpmChange}
        />
      </div>
        <button onClick={startStop}>{playing ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;
