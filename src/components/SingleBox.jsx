import React, { useContext, useEffect } from 'react';
import { AppContext } from './EasyGame';

export default function SingleBox({letterPos, attemptVal}) {
    const {
        board, 
        correctWord, 
        currAttempt, 
        disabledLetters,
        setDisabledLetters} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = 
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = 
        currAttempt.attempt > attemptVal && 
        (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);
        
    return (
        <div>
            <div className="single-box" id={letterState}>
                {" "}
                {letter}
            </div>
        </div>
    );
}