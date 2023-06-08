import { useContext } from 'react';
import { GameStateContext } from '../helpers/Context';
import '../App.css'

const Menu = () => {
    const {gameState, setGameState, userName, setUserName} = useContext(GameStateContext);

    return (
        <div className='Card' >
            {/* <h2>Menu</h2>
            <p>Theres a menu here.</p> */}
            <input type="text" placeholder="What's your name?" onChange={e => setUserName(e?.target?.value)} />
            <button onClick={() => setGameState('playing')}>
                Start Quiz
            </button>
        </div>
    )
}

export default Menu;