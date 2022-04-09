import React, { useContext } from "react";
import { GameContext } from "./Game";

function GameOver() {
    const {gameOver, currTryout, setGameOver, correctWord} = useContext(GameContext);
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? "Correctly guessed!" : "Failed!"}</h3>
            <h1>Correct word is: {correctWord}</h1>
            {gameOver.guessedWord && (
                <h3> You guessed in {currTryout.x_val} attempts.</h3>
            )}
        </div>
    )
}

export default GameOver