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
    await fetch(wordBankEasy)
    .then((response) => response.text())  
    .then((result) => {
        const wordArr = result.split("\n");
        wordSet = new Set(wordArr);
    });
    return { wordSet };
};