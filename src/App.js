import { useState } from 'react';
import {GameStateContext} from './helpers/Context';
import Menu from './components/Menu';
import Quiz from './components/Quiz';

import './App.css';
import EndScreen from './components/EndScreen';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [userName, setUserName] = useState('');
  const [score, setScore] = useState(0);

  const states = {
    gameState, 
    setGameState, 
    userName, 
    setUserName,
    score, 
    setScore
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>

      <div>
      <h3 className='score'>Score: {score}</h3>
      </div>

      <GameStateContext.Provider value={states}>
        {gameState && (gameState === 'menu') && (<Menu />)}
        {gameState && (gameState === 'playing') && (<Quiz />)}
        {gameState && (gameState === 'finished') && (<EndScreen />)}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
