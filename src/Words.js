import wordBankEasy from './wordle-bank-easy.txt';

export const boardDefaultEasy = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];


export const generateWordsSetEasy = async () => {
    let wordSet;  
    let todaysWord;
    await fetch(wordBankEasy)
    .then((response) => response.text())  
    .then((result) => {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
    });
    return { wordSet, todaysWord };
};