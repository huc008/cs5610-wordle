import React, { useContext, useEffect } from 'react';
import { GameContext } from './Game';

export default function SingleBox({y_pos, x_pos}) {
    const {
        board, 
        correctWord, 
        currTryout, 
        disabledLetters,
        setDisabledLetters} = useContext(GameContext);
    const letter = board[x_pos][y_pos];
    const correct = correctWord.toUpperCase()[y_pos] === letter;
    const almost = 
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = 
        currTryout.x_val > x_pos && 
        (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currTryout.x_val]);
        
    return (
        <div>
            <div className="single-box" id={letterState}>
                {/* {" "} */}
                {letter}
            </div>
        </div>
    );
}