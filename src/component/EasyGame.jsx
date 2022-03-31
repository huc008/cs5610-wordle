import React from 'react';
import './EasyGame.css';
import SingleBox from './SingleBox';
import FiveCol from './FiveCol';

export default function EasyGame(props) {
    return (
        <div>
            <h1>Easy Game</h1>
            {/* <div className="grid-container">
                <SingleBox />
                <SingleBox />
                <SingleBox />
                <SingleBox />
                <SingleBox />
                <SingleBox />
            </div> */}
            <div className="grid-container">
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
                <FiveCol />
            </div>
        </div>
    )
}