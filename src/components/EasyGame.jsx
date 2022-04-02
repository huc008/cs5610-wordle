import React, {createContext, useState} from 'react';
import KeyBoard from './KeyBoard';
import EasyBoard from './EasyBoard';
import { boardDefaultEasy } from '../Words';

export const AppContext = createContext();

export default function EasyGame() {
    const [board, setBoard] = useState(boardDefaultEasy);
    return (
        <div>
            <h1 className="game-title">Easy Game</h1>
            <AppContext.Provider value={{board, setBoard}}>
                <div className="grid-container">
                    <EasyBoard />
                </div>
                <div className="keyboard-container">
                    <KeyBoard />
                </div>
            </AppContext.Provider>
        </div>
    )
}