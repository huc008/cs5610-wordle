import React from 'react';
import './EasyGame.css';
import FiveCol from './FiveCol';
import KeyBoard from './KeyBoard';

export default function EasyGame(props) {
    return (
        <div>
            <h1 className="game-title">Easy Game</h1>
            <div className="grid-container">
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
            </div>

            <div className="keyboard-container">
                <KeyBoard />
            </div>
            
        </div>
    )
}