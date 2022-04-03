import React, {createContext, useState, useEffect} from 'react';
import KeyBoard from './KeyBoard';
import EasyBoard from './EasyBoard';
import { boardDefaultEasy, generateWordsSetEasy } from '../Words';
import GameOver from './GameOver';


export const AppContext = createContext();

export default function EasyGame() {
    const [board, setBoard] = useState(boardDefaultEasy);
    const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
    const [wordSet, setWordSet] = useState(new Set());
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    const correctWord = "RIGHT";

    useEffect(() => {
        generateWordsSetEasy().then((words) => {
            setWordSet(words.wordSet);
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos > 4) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;  
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1});
    };

    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1 ] = ""; 
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos-1});
    };

    const onEnter = () => {
        if (currAttempt.letterPos !== 5) return;

        let currWord = "";
        for (let i = 0; i < 5; i++) {
            currWord += board[currAttempt.attempt][i];
        }

        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0});
        } else {
            alert("Word Not Found");
        }

        if (currWord === correctWord) {
            setGameOver({gameOver: true, guessedWord: true});
        }

        if (currAttempt.attempt === 6) {
            setGameOver({gameOver: true, guessedWord: false});
        }
    };

    return (
        <div>
            <h1 className="game-title">Easy Game</h1>
            <AppContext.Provider 
            value={{
                board, 
                setBoard, 
                currAttempt, 
                setCurrAttempt, 
                onSelectLetter,
                onDelete, 
                onEnter,
                correctWord,
                setDisabledLetters,
                disabledLetters,
                gameOver,
                setGameOver,
            }}>
                <div className="grid-container">
                    <EasyBoard />
                </div>
                <div className="keyboard-container">
                    {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
                </div>
            </AppContext.Provider>
        </div>
    )
}