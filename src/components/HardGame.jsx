import React from 'react';
import HardBoard from './HardBoard';
import KeyBoard from './KeyBoard';

export default function MediumGame(props) {
    return (
        <div>
            <h1 className="game-title">Hard Game</h1>
            <div className="grid-container">
                <HardBoard />
            </div>
            <div className="keyboard-container">
                <KeyBoard />
            </div>
        </div>
    )
}