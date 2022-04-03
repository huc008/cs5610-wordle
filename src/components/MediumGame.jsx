import React from 'react';
import MediumBoard from './MediumBoard';
import KeyBoard from './KeyBoard';

export default function MediumGame(props) {
    return (
        <div>
            <h1 className="game-title">Medium Game</h1>
            <div className="grid-container">
                <MediumBoard />
            </div>
            <div className="keyboard-container">
                <KeyBoard />
            </div>
        </div>
    )
}