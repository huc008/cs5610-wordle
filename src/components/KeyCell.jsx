import React, { useContext, useState } from "react";
import {GameContext} from './Game';

export default function KeyCell({keyVal, disabled, actionKey}) {
    const {
        onSelectLetter,
        onDelete, 
        onEnter,
    } = useContext(GameContext);

    const selectLetter = () => {
        if (keyVal === "Enter") {
            onEnter();
        } else if (keyVal === "Backspace") {
            onDelete();
        } else {
            onSelectLetter(keyVal); 
        }
    }

    let className = "key-cell-vertical";
    if (keyVal === "Enter" || keyVal === "Backspace") {
        className = "key-cell-horizontal";
    }

    return (
        <div>
            <button className={className} id={actionKey ? "" : disabled && "disabled"} onClick={selectLetter}>
                {keyVal}
            </button>
        </div>
    );
}