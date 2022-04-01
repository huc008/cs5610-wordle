import React from 'react';
import './SixCol.css';
import SingleBox from './SingleBox';


export default function SixCol() {
    return (
        <div className="row-container">
            <SingleBox />
            <SingleBox />
            <SingleBox />
            <SingleBox />
            <SingleBox />
            <SingleBox />
        </div>
    )
}