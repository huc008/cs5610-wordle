import React from 'react';
import './KeyCell.css';

export default function KeyCell(props) {
    let className = "key-cell-vertical";
    if (props.value === "ENTER" || props.value === "⌫") {
        className = "key-cell-horizontal";
    }

    return (
        <div>
            <button className={className}>{props.value}</button>
        </div>
    );
}