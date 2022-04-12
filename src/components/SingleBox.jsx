import React, { useContext, useEffect } from 'react';
import { GameContext } from './Game';

export default function SingleBox({y_pos, x_pos}) {
    const {
        board, 
        correctWord, 
        currTryout, 
        disabledLetters,
        setDisabledLetters,
        correctWordObj,
        setCorrectWordObj,
    } = useContext(GameContext);
    const letter = board[x_pos][y_pos];
    const correct = correctWord.toUpperCase()[y_pos] === letter;
    const almostCorrect = 
        !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    
    // const isLetterCorrect = 
    //     currTryout.x_val > x_pos && 
    //     (correct ? "correct" : almostCorrect ? "almostCorrect" : "error");
    let correctWordObjCopy = correctWordObj;
    let correctID = "error";
    if (correct){
        correctID = "correct";
        if (letter in correctWordObj && correctWordObj[letter] === 1) {
            delete correctWordObj[letter];
        } else if (letter in correctWordObj && correctWordObj[letter] > 1) {
            correctWordObj[letter] -= 1;
        } 
    } else if (almostCorrect){
        if  (letter in correctWordObj && correctWordObj[letter] === 1) {
            correctID = "almostCorrect";
            delete correctWordObj[letter];
        } else if (letter in correctWordObj && correctWordObj[letter] > 1) {
            correctID = "almostCorrect";
            correctWordObj[letter] -= 1;
        } 
    } 
    setCorrectWordObj(correctWordObjCopy);

    const isLetterCorrect = 
        currTryout.x_val > x_pos && correctID;

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