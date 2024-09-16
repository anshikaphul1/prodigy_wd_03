let currentPlayer = 'X';
let gameBoard = [];
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < 9; i++) {
    gameBoard.push('');
}

function makeMove(cell) {
    if (cell.value === '') {
        cell.value = currentPlayer;
        gameBoard[getCellIndex(cell)] = currentPlayer;
        checkForWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function getCellIndex(cell) {
    return parseInt(cell.id.split('-')[1]) - 1;
}

function checkForWin() {
    for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]] && gameBoard[combination[0]] !== '') {
            alert(`Player ${gameBoard[combination[0]]} wins!`);
            resetGame();
            return;
        }
    }
}

function resetGame() {
    gameBoard = [];
    for (let i = 0; i < 9; i++) {
        gameBoard.push('');
    }
    currentPlayer = 'X';
    let cells = document.querySelectorAll('input[type="button"]');
    for (let i = 0; i < cells.length; i++) {
        cells[i].value = '';
    }
}