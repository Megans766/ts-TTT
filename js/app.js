"use strict";
// Constants
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
//Variables (state)
let board, turn, winner, tie;
//Cached Element References
const squareEls = document.querySelectorAll('.sqr');
const messgaeEl = document.getElementById('message');
const resetBtn = document.querySelector('#reset');
//Event Listeners
// squareEls.addEventlistener('click', handleClick)
resetBtn?.addEventListener('click', init);
//Functions
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
}
init();
function handleClick(evt) {
}
