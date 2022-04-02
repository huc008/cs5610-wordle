import React from 'react';
import KeyCell from './KeyCell';

export default function KeyBoard(props) {
    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
    
    return (
        <div className="keyboard">
            <div className="keyboard-row">
                <KeyCell value="Q" />
                <KeyCell value="W" />
                <KeyCell value="E" />
                <KeyCell value="R" />
                <KeyCell value="T" />
                <KeyCell value="Y" />
                <KeyCell value="U" />
                <KeyCell value="I" />
                <KeyCell value="O" />
                <KeyCell value="P" />
            </div>
            <div className="keyboard-row">
                <KeyCell value="A" />
                <KeyCell value="S" />
                <KeyCell value="D" />
                <KeyCell value="F" />
                <KeyCell value="G" />
                <KeyCell value="H" />
                <KeyCell value="J" />
                <KeyCell value="K" />
                <KeyCell value="L" />
            </div>
            <div className="keyboard-row">
                <KeyCell value="Enter" />
                <KeyCell value="Z" />
                <KeyCell value="X" />
                <KeyCell value="C" />
                <KeyCell value="V" />
                <KeyCell value="B" />
                <KeyCell value="N" />
                <KeyCell value="M" />
                <KeyCell value="Backspace" />
            </div>
        </div>
    );
}