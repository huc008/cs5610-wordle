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
    const almostCorrect = 
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const isLetterCorrect = 
        currTryout.x_val > x_pos && 
        (correct ? "correct" : almostCorrect ? "almostCorrect" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almostCorrect) {
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currTryout.x_val]);
        
    return (
        <div>
            <div className="single-box" id={isLetterCorrect}>
                {/* {" "} */}
                {letter}
            </div>
        </div>
    );
}