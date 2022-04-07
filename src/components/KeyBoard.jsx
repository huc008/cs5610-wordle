import React, { useCallback, useEffect, useContext } from 'react';
import KeyCell from './KeyCell';
import { AppContext } from './EasyGame';

export default function KeyBoard() {
    const {onEnter, onDelete, onSelectLetter, disabledLetters} = useContext(AppContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    const handleKeyboard = useCallback((event) => {
        if (event.key === "Enter") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            keys1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
            keys2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
            keys3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key)
                }
            })
        }
    });

    useEffect( () => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard)
        };
    }, [handleKeyboard]);

    return (
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="keyboard-row">
                {keys1.map((key) => {
                    return <KeyCell keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="keyboard-row">
                {keys2.map((key) => {
                    return <KeyCell keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
            </div>
            <div className="keyboard-row">
                <KeyCell keyVal={"Enter"} actionKey />
                {keys3.map((key) => {
                    return <KeyCell keyVal={key} disabled={disabledLetters.includes(key)} />;
                })}
                <KeyCell keyVal={"Backspace"} actionKey />
            </div>
        </div>
    );
}