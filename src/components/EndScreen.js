import '../App.css'
import { useContext, useState } from 'react';
import { GameStateContext } from '../helpers/Context';
import { Questions } from '../helpers/Questions';


const EndScreen = () => {
    const {userName, score, setScore, setGameState} = useContext(GameStateContext);
    const percentage = (score/Questions.length) * 100;

    const restartQuiz = () => {
        setScore(0);
        setGameState('menu');
    }

    return (
        <div className='Card' >
            <h1>{(percentage > 60) ? 'Congratulations! :)' : 'Sorry! :('}</h1>
            <h2> Hey {userName}, you scored {score} points! </h2>
            <h3> You got {percentage}% answers correct!</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen;