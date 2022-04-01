import React from 'react';
import './MediumGame.css';
import SixCol from './SixCol';
import KeyBoard from './KeyBoard';

export default function MediumGame(props) {
    return (
        <div>
            <h1 className="game-title">Medium Game</h1>
            <div className="grid-container">
                <SixCol />
                <SixCol />
                <SixCol />
                <SixCol />
                <SixCol />
                <SixCol />
            </div>
            <div className="keyboard-container">
                <KeyBoard />
            </div>
        </div>
    )
}