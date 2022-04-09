export const boardDefaultEasy = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const boardDefaultMedium = [
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
];

export const boardDefaultHard = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
];


export const generateWordsSet = async (inputBank) => {
    let wordSet;  
    let selectedMagicWord;
    await fetch(inputBank)
    .then((response) => response.text())  
    .then((result) => {
        const wordArray = result.split("\n");
        selectedMagicWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        wordSet = new Set(wordArray);
    });
    return { wordSet, selectedMagicWord };
};