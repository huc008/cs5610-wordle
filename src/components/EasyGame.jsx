import React from 'react';
import './EasyGame.css';
import FiveCol from './FiveCol';
import KeyBoard from './KeyBoard';
import Navbar from './Navbar'

export default function EasyGame(props) {
    return (
        <div>
            <Navbar />
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