import React from 'react';
import './MediumGame.css';
import SevenCol from './SevenCol';
import KeyBoard from './KeyBoard';

export default function MediumGame(props) {
    return (
        <div>
            <h1 className="game-title">Medium Game</h1>
            <div className="grid-container">
                <SevenCol />
                <SevenCol />
                <SevenCol />
                <SevenCol />
                <SevenCol />
            </div>
            <div className="keyboard-container">
                <KeyBoard />
            </div>
        </div>
    )
}