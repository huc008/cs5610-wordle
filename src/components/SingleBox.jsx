import React, { useContext } from 'react';
import { AppContext } from './EasyGame';

export default function SingleBox({letterPos, attemptVal}) {
    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    return (
        <div>
            <div className="single-box">{letter}</div>
        </div>
    );
}