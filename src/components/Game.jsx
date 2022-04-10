import React, {createContext, useState, useEffect} from 'react';
import KeyBoard from './KeyBoard';
import Navbar from './Navbar'
import GridBoard from './GridBoard';
import { boardDefaultEasy, boardDefaultMedium, boardDefaultHard, generateWordsSet } from '../Words';
import GameOver from './GameOver';
import wordBankEasy from '../wordle-bank-easy.txt';
import wordBankMedium from '../wordle-bank-medium.txt';
import wordBankHard from '../wordle-bank-hard.txt';
import GameModal from './GameModal';


export const GameContext = createContext();

export default function Game({row, col, difficultyLevel}) {
    let choosenWordBank = difficultyLevel === "Easy" ? wordBankEasy : difficultyLevel === "Medium" ? wordBankMedium : wordBankHard;
    const [openModal, setOpenModal] = useState(false);
    const [board, setBoard] = useState(difficultyLevel === "Easy" ? boardDefaultEasy : difficultyLevel === "Medium" ? boardDefaultMedium : boardDefaultHard);
    const [currTryout, setCurrTryout] = useState({ x_val: 0, y_val: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("");
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        gameOver: false,
        triedWord: false,
    });

    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);

    useEffect(() => {
        generateWordsSet(choosenWordBank).then((words) =>{
            setWordSet(words.wordSet);
            setCorrectWord(words.selectedMagicWord);
        });
    }, []);

    // console.log(correctWord);
    const onSelectLetter = (keyVal) => {
        if (currTryout.y_val >= col) return;
        const newBoard = [...board];
        newBoard[currTryout.x_val][currTryout.y_val] = keyVal;  
        setBoard(newBoard);
        setCurrTryout({...currTryout, y_val: currTryout.y_val + 1});
    };

    const onDelete = () => {
        if (currTryout.y_val === 0) return;
        const newBoard = [...board];
        newBoard[currTryout.x_val][currTryout.y_val - 1 ] = ""; 
        setBoard(newBoard);
        setCurrTryout({...currTryout, y_val: currTryout.y_val - 1});
    };

    const onEnter = () => {
        if (currTryout.y_val !== col) return;

        let currWord = "";
        for (let i = 0; i < col; i++) {
            currWord += board[currTryout.x_val][i];
        }

        if (wordSet.has(currWord.toLowerCase())) {
            setCurrTryout({ x_val: currTryout.x_val + 1, y_val: 0});
        } else {
            setOpenModal(true);
        }

        if (currWord.toLowerCase() === correctWord.toLowerCase()) {
            setGameOver({gameOver: true, triedWord: true});
        }

        if (currTryout.x_val === row-1) {
            setGameOver({gameOver: true, triedWord: false});
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="game-title">{difficultyLevel}</h1>
            <GameContext.Provider 
            value={{
                board, 
                setBoard, 
                currTryout, 
                setCurrTryout, 
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
                    <GridBoard row={row} col={col}/>
                </div>
                <div className="keyboard-container">
                    {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
                </div>
            </GameContext.Provider>
        </div>
    )
}