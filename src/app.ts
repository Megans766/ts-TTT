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
]

//Variables (state)
let board: number[], turn: number, winner: boolean, tie: boolean

//Cached Element References
const squareEls = document.querySelectorAll('.sqr')
const boardEl = document.querySelector<HTMLElement>('.board')!
const messgaeEl = document.getElementById('message')!
const resetBtn = document.querySelector<HTMLButtonElement>('#reset')

//Event Listeners
boardEl.addEventListener('click', handleClick)
resetBtn?.addEventListener('click', init)

//Functions
function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
  render()
}

init ()

function render(): void {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  board.forEach((squ, idx) => {
    if (squ === 1) squareEls[idx].textContent = 'X'
    else if (squ === -1) squareEls[idx].textContent = 'O'
    else squareEls[idx].textContent = ''
  })
}

function updateMessage(): void {
  if (!winner && !tie) {
    messgaeEl.textContent = `Player ${turn === 1 ? 'X' : 'O'} turn`
  } else if (!winner && tie) {
    messgaeEl.textContent = "It's a tie!"
  } else {
    messgaeEl.textContent = `Player ${turn === -1 ? 'O' : 'X'} wins!`
  }
}

function handleClick(evt: MouseEvent): void {
  if (!(evt.target instanceof HTMLElement)) return

  const sqIdx = parseInt(evt.target.id.slice(2, 3), 10)

  if (isNaN(sqIdx) || board[sqIdx] || winner) return

  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
}

function placePiece(idx: number) {
  board[idx] = turn
}

function checkForTie(): void {
  tie = board.every(sqr => {
    return sqr !== 0
  })
}

function checkForWinner(): void {
  winCombos.forEach(combo => {
    let theWinner = 0 
    combo.forEach(function(element) {
      theWinner += board[element]
    })
    if (Math.abs(theWinner) === 3) {
      winner = true
    }
  })
}