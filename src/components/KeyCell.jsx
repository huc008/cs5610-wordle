import React from 'react';
import './KeyCell.css';

export default function KeyCell(props) {
    let className = "key-cell-vertical";
    if (props.value === "Enter" || props.value === "Backspace") {
        className = "key-cell-horizontal";
    }

    return (
        <div>
            <button className={className}>{props.value}</button>
        </div>
    );
}