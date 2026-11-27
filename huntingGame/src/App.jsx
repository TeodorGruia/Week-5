/* Sam Goldberg
11/14/26
Week 5 Animal Hunting Game */

import { useState, useEffect } from 'react';
import Image from './components/Image';
import './App.css';
import { playBeep } from './utils/beep';
import { saveValue, getValue } from './utils/save';

function App() {
  //These hooks and state management declarations set initual values for the score, round,
  //animal position, and animal from the array of animals
  const animalList = ['giraffe.png', 'gorilla.png', 'tiger.png', 'trex.png'];
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [position, setPosition] = useState({ top: '90%', left: '0%' });
  const [animalIndex, setAnimalIndex] = useState(0);
  console.log(animalIndex);
  useEffect(() => {
    localStorage.setItem("saveValue", "0");
    // The "walk" of the animal
      const interval = setInterval(() => {
      let top = Math.floor(Math.random() * 5 ) + 80 + '%';
      let step = Math.floor(Math.random() * 4) + 18;
      
      saveValue(step);
      let leftNumeric = parseInt(getValue(), 10);

      // The animal changes and the round updates when the previous animal goes to the right of the window
      if (leftNumeric === 0) {
        //Randomly select an animal from the animalList array and make sure the same one
        //does not appear one after the other
        setAnimalIndex((prev) => {
          let next;
          do {
            next = Math.floor(Math.random() * animalList.length);
          } while (next === prev);
          return next;
        });
        setRound((prevRound) => prevRound + 1);
        setScore((score) => 0);
      }
      
      setPosition({ top, left: leftNumeric + '%' });

    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  //only beep when the animal is clicked. Update the score when clicked.
  const handleClick = () => {
    setScore((prev) => prev + 1);
    playBeep();
  };

  return (
    // The scoreboard
    <div className="container" id="scoreboardBG">
      <header id="scoreboard">
        <h1>Round: {round}</h1>
        <h2>Score: {score}</h2>
      </header>
      
      {/* Enables the clicking of the animal to get points */}
      <span 
        className="animal" 
        style={{ top: position.top, left: position.left, position: 'absolute' }}
        onClick={handleClick}
      >
        <Image src={animalList[animalIndex]} alt="animal walking" />
      </span>
    </div>
  );
}

export default App;