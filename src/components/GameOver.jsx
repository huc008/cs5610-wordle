import React, { useContext } from "react";
import { AppContext } from "./EasyGame";

function GameOver() {
    const {gameOver, currAttempt, setGameOver, correctWord} = useContext(AppContext);
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? "Correctly guessed!" : "Failed!"}</h3>
            <h1>Correct word is: {correctWord}</h1>
            {gameOver.guessedWord && (
                <h3> You guessed in {currAttempt.attempt} attempts.</h3>
            )}
        </div>
    )
}

export default GameOver