import React, { useContext } from "react";
import { GameContext } from "./Game";

function GameOver() {
    const {gameOver, currTryout, setGameOver, correctWord} = useContext(GameContext);

    function playAgain(){
        window.location.reload();
    }

    return (
        <div className="gameOver">
            <h3>{gameOver.triedWord ? "Correctly guessed!" : "Failed!"}</h3>
            <h1>Correct word is: {correctWord}</h1>
            <button className="button" onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default GameOver;