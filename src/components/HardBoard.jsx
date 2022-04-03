import React from 'react';
import SingleBox from './SingleBox';

function HardBoard() {
    return (
        <div>
            <div className="row-container">
                <SingleBox letterPos={0} attemptVal={0} />
                <SingleBox letterPos={1} attemptVal={0} />
                <SingleBox letterPos={2} attemptVal={0} />
                <SingleBox letterPos={3} attemptVal={0} />
                <SingleBox letterPos={4} attemptVal={0} />
                <SingleBox letterPos={5} attemptVal={0} />
                <SingleBox letterPos={6} attemptVal={0} />
            </div>
            <div className="row-container">
                <SingleBox letterPos={0} attemptVal={1} />
                <SingleBox letterPos={1} attemptVal={1} />
                <SingleBox letterPos={2} attemptVal={1} />
                <SingleBox letterPos={3} attemptVal={1} />
                <SingleBox letterPos={4} attemptVal={1} />
                <SingleBox letterPos={5} attemptVal={1} />
                <SingleBox letterPos={6} attemptVal={1} />
            </div>
            <div className="row-container">
                <SingleBox letterPos={0} attemptVal={2} />
                <SingleBox letterPos={1} attemptVal={2} />
                <SingleBox letterPos={2} attemptVal={2} />
                <SingleBox letterPos={3} attemptVal={2} />
                <SingleBox letterPos={4} attemptVal={2} />
                <SingleBox letterPos={5} attemptVal={2} />
                <SingleBox letterPos={6} attemptVal={2} />
            </div>
            <div className="row-container">
                <SingleBox letterPos={0} attemptVal={3} />
                <SingleBox letterPos={1} attemptVal={3} />
                <SingleBox letterPos={2} attemptVal={3} />
                <SingleBox letterPos={3} attemptVal={3} />
                <SingleBox letterPos={4} attemptVal={3} />
                <SingleBox letterPos={5} attemptVal={3} />
                <SingleBox letterPos={6} attemptVal={3} />
            </div>
            <div className="row-container">
                <SingleBox letterPos={0} attemptVal={4} />
                <SingleBox letterPos={1} attemptVal={4} />
                <SingleBox letterPos={2} attemptVal={4} />
                <SingleBox letterPos={3} attemptVal={4} />
                <SingleBox letterPos={4} attemptVal={4} />
                <SingleBox letterPos={5} attemptVal={4} />
                <SingleBox letterPos={6} attemptVal={4} />
            </div>
        </div>
    )
}

export default HardBoard