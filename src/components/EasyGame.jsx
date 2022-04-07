import React, {createContext, useState, useEffect} from 'react';
import KeyBoard from './KeyBoard';
import Navbar from './Navbar'
import EasyBoard from './EasyBoard';
import { boardDefaultEasy, boardDefaultMedium, boardDefaultHard, generateWordsSet } from '../Words';
import GameOver from './GameOver';
import wordBankEasy from '../wordle-bank-easy.txt';
import wordBankMedium from '../wordle-bank-medium.txt';
import wordBankHard from '../wordle-bank-hard.txt';
import GameModal from './GameModal';


export const AppContext = createContext();

export default function EasyGame({row, col, difficultyLevel}) {
    const [board, setBoard] = useState(difficultyLevel === "Easy" ? boardDefaultEasy : difficultyLevel === "Medium" ? boardDefaultMedium : boardDefaultHard);
    const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        guessedWord: false,
    });

    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);

    let choosenWordBank = difficultyLevel === "Easy" ? wordBankEasy : difficultyLevel === "Medium" ? wordBankMedium : wordBankHard;
    useEffect(() => {
        generateWordsSet(choosenWordBank).then((words) =>{
            setWordSet(words.wordSet);
            setCorrectWord(words.todaysWord);
        });
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currAttempt.letterPos >= col) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;  
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
    };

    const onDelete = () => {
        if (currAttempt.letterPos === 0) return;
        const newBoard = [...board];
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1 ] = ""; 
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
    };

    const onEnter = () => {
        if (currAttempt.letterPos !== col) return;

        let currWord = "";
        for (let i = 0; i < col; i++) {
            currWord += board[currAttempt.attempt][i];
        }

        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0});
        } else {
            // alert("Word Not Found");
            setOpenModal(true);
        }

        if (currWord.toLowerCase() === correctWord.toLowerCase()) {
            setGameOver({gameOver: true, guessedWord: true});
        }

        if (currAttempt.attempt === row-1) {
            setGameOver({gameOver: true, guessedWord: false});
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="game-title">{difficultyLevel}</h1>
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
                openModal, 
                setOpenModal,
                handleClose,
                handleShow,
            }}>
                {openModal ? <GameModal/> : null}
                <div className="grid-container">
                    <EasyBoard row={row} col={col}/>
                </div>
                <div className="keyboard-container">
                    {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
                </div>
            </AppContext.Provider>
        </div>
    )
}