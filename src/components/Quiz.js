import '../App.css'
import { useContext, useState } from 'react';
import { GameStateContext } from '../helpers/Context';
import { Questions } from '../helpers/Questions';


const Quiz = () => {
    const {setScore, setGameState} = useContext(GameStateContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');

    const chooseOption = (choice) => {
        setOptionChosen(choice);
    }

    const nextQuestion = () => {       
        // check the selected option to see if the answer is correct, 
        // and then finish the game if we have reached the end of the questions.
        if (Questions[currentQuestion]?.answer === optionChosen) setScore(prev => prev + 1); 
        if (currentQuestion >= Questions.length - 1) return setGameState('finished');
        setCurrentQuestion(prev => prev + 1);
    }

    return (
        <div className='Card' >
            {currentQuestion}/{Questions.length}
            <h1> {Questions[currentQuestion]?.question} </h1>
            <div className="options">
                <button onClick={() => chooseOption('optionA')}> {Questions[currentQuestion]?.optionA} </button>
                <button onClick={() => chooseOption('optionB')}> {Questions[currentQuestion]?.optionB} </button>
                <button onClick={() => chooseOption('optionC')}> {Questions[currentQuestion]?.optionC} </button>
                <button onClick={() => chooseOption('optionD')}> {Questions[currentQuestion]?.optionD} </button>
                <button class='next-button' onClick={nextQuestion}>
                    {currentQuestion === Questions?.length - 1 ? 'Finish Quiz' : 'Submit & Next Question' }
                </button>
            </div>
        </div>
    )
}

export default Quiz;

{/* {
    Questions.map(ques => {
        return (
            <div>
                <div>Q: {ques?.question}</div>
                <div>A: {ques?.optionA}</div>
                <div>B: {ques?.optionB}</div>
                <div>C: {ques?.optionC}</div>
                <div>D: {ques?.optionD}</div>
            </div>
        )
    })
} */}