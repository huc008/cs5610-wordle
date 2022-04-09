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
    let choosenWordBank = difficultyLevel === "Easy" ? wordBankEasy : difficultyLevel === "Medium" ? wordBankMedium : wordBankHard;
    let wordLevelLength = difficultyLevel === "Easy" ? 5 : difficultyLevel === "Medium" ? 6 : 7;

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

    //to save answer when reload with unfinished game:
    useEffect(() => {
            if(window.localStorage.getItem('correctWord') == null || JSON.parse(window.localStorage.getItem('correctWord')).length != wordLevelLength) {
                console.log("don't have storage correctWord");
                generateWordsSet(choosenWordBank).then((words) =>{
                    setWordSet(words.wordSet);
                    setCorrectWord(words.todaysWord);
                    window.localStorage.setItem('correctWord', JSON.stringify(words.todaysWord));
                    // console.log("wordSet " + words.wordSet);
                    console.log("Answer_todaysWord: " + words.todaysWord);
                    console.log("Answer_correctWord: " + correctWord);
                });
            } else {
                console.log("find the word ");
                setCorrectWord(JSON.parse(window.localStorage.getItem('correctWord')));
                generateWordsSet(choosenWordBank).then((words) =>{
                    setWordSet(words.wordSet);
                });
                console.log("Answer_correctWord: " + JSON.parse(window.localStorage.getItem('correctWord')));
            }
    }, []);

    //save board data:
    useEffect(() => {
        const newboard = JSON.parse(window.localStorage.getItem('board'));
        if (newboard && choosenWordBank == wordBankEasy && newboard.length == 7) {
            setBoard(newboard)
        } else if (newboard && choosenWordBank == wordBankMedium && newboard.length == 6) {
            setBoard(newboard)
        } else if (newboard && choosenWordBank == wordBankHard && newboard.length == 5) {
            setBoard(newboard)
        }
        let tmpAttempt = JSON.parse(window.localStorage.getItem('currAttempt'));
        if(tmpAttempt && !(tmpAttempt.attempt ==0 && tmpAttempt.letterPos == 0)) {
            tmpAttempt = {...tmpAttempt, letterPos: tmpAttempt.letterPos + 1};
            setCurrAttempt(tmpAttempt); 
        }
      }, []);
    
    useEffect(() => {
        window.localStorage.setItem('board', JSON.stringify(board));
        window.localStorage.setItem('currAttempt', JSON.stringify(currAttempt));
    }, [board]);

    useEffect(() => {
        if(gameOver.gameOver){
            let defaultBoard = difficultyLevel === "Easy" ? boardDefaultEasy : difficultyLevel === "Medium" ? boardDefaultMedium : boardDefaultHard;
            window.localStorage.setItem('board', JSON.stringify(defaultBoard));
            window.localStorage.removeItem('correctWord');
            window.localStorage.setItem('currAttempt', JSON.stringify({attempt: 0, letterPos: 0}));
        }
    }, [gameOver.gameOver]);

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
        console.log("current word = " + currWord);
        console.log("correct word = " + correctWord);
        if (wordSet.has(currWord.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0});
        } else {
            // alert("Word Not Found");
            setOpenModal(true);
        }

        if (currWord.toLowerCase() === correctWord.toLowerCase()) {
            console.log("game over!")
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