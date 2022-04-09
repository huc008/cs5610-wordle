import React from "react";

export default function Rule() {
    return (
        <div className="text-center">
            <h1 className="title">What is this</h1>
            <p>
                This is a web word-guessing game inspired by the 
                <a href="https://www.nytimes.com/games/wordle/index.html">wordle</a> 
                developed by Josh Wardle.
            </p>
            <p>
                Developers improve this game by adding different modes to have more fun.
            </p>
            <p>Enjoy!</p>
            <h1 className="title">How to play</h1>
            <div className="rules">
                <p>Guess the <strong>WORDLE</strong> in several tries (7-easy, 6-medium, 5-hard).</p>
                <p>You can guess any valid word of the length of columns. Hit the enter button to submit.</p>
                <p>After each guess, each letter will turn green, yellow, or gray to give you some hints:</p>
            </div>
            <div>
                <span className="green-letter">W</span>
                <span> = Correct letter, correct spot</span>
            </div>
            <div>
                <span className="yellow-letter">W</span>
                <span> = Correct letter, wrong spot</span>
            </div>
            <div>
                <span className="grey-letter">W</span>
                <span> = Wrong spot</span>
            </div>
        </div>
        
    )
}