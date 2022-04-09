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
import { useLocalStorage } from './useLocalStorage'

export const AppContext = createContext();

export default function EasyGame({row, col, difficultyLevel}) {
    // const [board, setBoard] = useLocalStorage('stateBoard', boardDefaultEasy)
    const [board, setBoard] = useState(difficultyLevel === "Easy" ? boardDefaultEasy : difficultyLevel === "Medium" ? boardDefaultMedium : boardDefaultHard);
    // const [board, setBoard] = useLocalStorage('stateBoard', boardDefaultEasy)
    const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});
    const [wordSet, setWordSet] = useState(new Set());
    const [correctWord, setCorrectWord] = useState("h");
    const [disabledLetters, setDisabledLetters] = useState([]);
    const [gameOver, setGameOver] = useState({
        // initialState: true,
        gameOver: false,
        guessedWord: false,
    });
    // const [init, setInit] = useState(true);

    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);
    const handleShow = () => setOpenModal(true);





    let choosenWordBank = difficultyLevel === "Easy" ? wordBankEasy : difficultyLevel === "Medium" ? wordBankMedium : wordBankHard;
    if (!gameOver.gameOver) {
        console.log("game is continueing"); 
    }


    useEffect(() => {
        // if (init) {

        //     console.log("before ")
        //     console.log(gameOver)
            // setGameOver({initialState: false, gameOver: true, guessedWord: true});
            // init = false;
            // window.localStorage.getItem('inittt', init);
            // console.log(gameOver)
            // console.log(init);
            // console.log("game is continueing");
            console.log("previous answer " + window.localStorage.getItem('correctWord'))
            console.log("previous wordSet " + window.localStorage.getItem('wordSet'))
            // if(window.localStorage.getItem('correctWord') == null) {
            //     console.log("don't have storage correctWord");
            //     generateWordsSet(choosenWordBank).then((words) =>{
            //         setWordSet(words.wordSet);
            //         setCorrectWord(words.todaysWord);
            //         window.localStorage.setItem('correctWord', JSON.stringify(words.todaysWord));
            //         console.log("wordSet " + words.wordSet);
            //         window.localStorage.setItem('wordSet', JSON.stringify(words.wordSet));
            //         // setInit(false);
            //         console.log("Answer_todaysWord: " + words.todaysWord);
            //         console.log("Answer_correctWord: " + correctWord);
            //     });
            // } else {
            //     console.log("find the word ");
            //     setCorrectWord(window.localStorage.getItem('correctWord'));
            //     const ws = JSON.parse(window.localStorage.getItem('wordSet'));
            //     // console.log("wordSet in else " + ws.values())
            //     setWordSet(ws)
            // }


            generateWordsSet(choosenWordBank).then((words) =>{
                setWordSet(words.wordSet);
                setCorrectWord(words.todaysWord);

                // window.localStorage.setItem('correctWord', JSON.stringify(words.todaysWord));
                // setInit(false);
                console.log("Answer_todaysWord: " + words.todaysWord);
                console.log("Answer_correctWord: " + correctWord);
            });
            
        // }
    }, []);

    console.log("Answer_correctWord: " + correctWord);




    //save board data:
    useEffect(() => {
        console.log("reload the board");
        const newboard = JSON.parse(window.localStorage.getItem('board'));
        console.log(newboard)
        if (newboard && choosenWordBank == wordBankEasy && newboard.length == 7) {
            setBoard(newboard)
        } else if (newboard && choosenWordBank == wordBankMedium && newboard.length == 6) {
            setBoard(newboard)
        } else if (newboard && choosenWordBank == wordBankHard && newboard.length == 5) {
            setBoard(newboard)
        }
        console.log(JSON.parse(window.localStorage.getItem('currAttempt')));
        let tmpAttempt = JSON.parse(window.localStorage.getItem('currAttempt'));
        console.log(tmpAttempt);
        if(tmpAttempt && !(tmpAttempt.attempt ==0 && tmpAttempt.letterPos == 0)) {
            //TODO: when letterPos = col, still add one when refresh -> need to delete extra pos before delete letter
            tmpAttempt = {...tmpAttempt, letterPos: tmpAttempt.letterPos + 1};
            setCurrAttempt(tmpAttempt); 
        }
        // setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
      }, []);
    
    useEffect(() => {
        console.log("update localStorage board");
        window.localStorage.setItem('board', JSON.stringify(board));
        window.localStorage.setItem('currAttempt', JSON.stringify(currAttempt));
    }, [board]);

    useEffect(() => {
        console.log("game over changed !")
        console.log(gameOver.gameOver);
        const test = [
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
        ];
        // setBoard(boardDefaultEasy)
        window.localStorage.setItem('board', JSON.stringify(test));
        console.log(JSON.parse(window.localStorage.getItem('board')));
        console.log(boardDefaultEasy)
        // window.localStorage.setItem('correctWord', JSON.stringify(""));
        // setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
        window.localStorage.setItem('currAttempt', JSON.stringify({attempt: 0, letterPos: 0}));
    }, [gameOver.gameOver]);

    

    // //save current attempt data:
    // useEffect(() => {
    //     setCurrAttempt(JSON.parse(window.localStorage.getItem('currAttemp')))
    //   }, []);

    // useEffect(() => {
    //     window.localStorage.setItem('currAttempt', JSON.stringify(currAttempt));
    // }, [currAttempt]);

        //save answer data:
        // useEffect(() => {
        //     setCorrectWord(JSON.parse(window.localStorage.getItem('correctWord')))
        //   }, []);
    
        // useEffect(() => {
        //     window.localStorage.setItem('correctWord', JSON.stringify(correctWord));
        // }, [correctWord]);
    


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