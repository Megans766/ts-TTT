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
const boardEl = document.querySelector('.board');
const messgaeEl = document.getElementById('message');
const resetBtn = document.querySelector('#reset');
//Event Listeners
boardEl.addEventListener('click', handleClick);
resetBtn?.addEventListener('click', init);
//Functions
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
init();
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((squ, idx) => {
        if (squ === 1)
            squareEls[idx].innerHTML = 'X';
        else if (squ === -1)
            squareEls[idx].innerHTML = 'O';
        else
            squareEls[idx].innerHTML = '';
    });
}
function updateMessage() {
    if (!winner && !tie) {
        messgaeEl.textContent = `Player ${turn === 1 ? 'X' : 'O'} turn`;
    }
    else if (!winner && tie) {
        messgaeEl.textContent = "It's a tie!";
    }
    else {
        messgaeEl.textContent = `Player ${turn === 1 ? 'X' : 'O'} wins!`;
    }
}
function handleClick(evt) {
    if (!(evt.target instanceof HTMLElement))
        return;
    const sqIdx = parseInt(evt.target.id.slice(2, 3), 10);
    if (isNaN(sqIdx) || board[sqIdx] || winner)
        return;
    placePiece(sqIdx);
}
function placePiece(idx) {
    board[idx] = turn;
}
