import React from 'react';
import './FiveCol.css';
import SingleBox from './SingleBox';

export default function FiveCol() {
    return (
        <div className="row-container">
            <SingleBox />
            <SingleBox />
            <SingleBox />
            <SingleBox />
            <SingleBox />
        </div>
    )
}