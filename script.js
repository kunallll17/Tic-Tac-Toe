// document.addEventListener('DOMContentLoaded', () => {
//     const cells = document.querySelectorAll('.cell');
//     const resetButton = document.getElementById('resetButton');
//     const gameBoard = document.getElementById('gameBoard');
//     const scoreXDisplay = document.getElementById('scoreX');
//     const scoreODisplay = document.getElementById('scoreO');
//     const currentPlayerDisplay = document.getElementById('currentPlayer');
//     let currentPlayer = 'X';
//     let gameActive = true;
//     let scoreX = 0;
//     let scoreO = 0;
//     const boardState = Array(9).fill(null);

//     const winningCombinations = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     cells.forEach(cell => {
//         cell.addEventListener('click', handleCellClick);
//     });

//     resetButton.addEventListener('click', resetGame);

//     function handleCellClick(event) {
//         const cell = event.target;
//         const index = cell.getAttribute('data-index');

//         if (boardState[index] !== null || !gameActive) {
//             return;
//         }

//         cell.textContent = currentPlayer;
//         boardState[index] = currentPlayer;

//         if (checkWin()) {
//             if (currentPlayer === 'X') {
//                 scoreX++;
//                 scoreXDisplay.textContent = scoreX;
//             } else {
//                 scoreO++;
//                 scoreODisplay.textContent = scoreO;
//             }
//             alert(`${currentPlayer} wins!`);
//             gameActive = false;
//             return;
//         }

//         if (boardState.every(cell => cell !== null)) {
//             alert("It's a draw!");
//             gameActive = false;
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         currentPlayerDisplay.textContent = currentPlayer;
//     }

//     function checkWin() {
//         return winningCombinations.some(combination => {
//             return combination.every(index => {
//                 return boardState[index] === currentPlayer;
//             });
//         });
//     }

//     function resetGame() {
//         boardState.fill(null);
//         cells.forEach(cell => {
//             cell.textContent = '';
//         });
//         currentPlayer = 'X';
//         currentPlayerDisplay.textContent = currentPlayer;
//         gameActive = true;
//     }
// });
//Different code down !!! 
// document.addEventListener('DOMContentLoaded', () => {
//     const cells = document.querySelectorAll('.cell');
//     const resetButton = document.getElementById('resetButton');
//     const gameBoard = document.getElementById('gameBoard');
//     const scoreXDisplay = document.getElementById('scoreX');
//     const scoreODisplay = document.getElementById('scoreO');
//     const currentPlayerDisplay = document.getElementById('currentPlayer');
//     let currentPlayer = 'X';
//     let gameActive = true;
//     let scoreX = 0;
//     let scoreO = 0;
//     const boardState = Array(9).fill(null);

//     const winningCombinations = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];

//     cells.forEach(cell => {
//         cell.addEventListener('click', handleCellClick);
//     });

//     resetButton.addEventListener('click', resetGame);

//     function handleCellClick(event) {
//         const cell = event.target;
//         const index = cell.getAttribute('data-index');

//         if (boardState[index] !== null || !gameActive) {
//             return;
//         }

//         cell.textContent = currentPlayer;
//         boardState[index] = currentPlayer;

//         if (checkWin()) {
//             if (currentPlayer === 'X') {
//                 scoreX++;
//                 scoreXDisplay.textContent = scoreX;
//             } else {
//                 scoreO++;
//                 scoreODisplay.textContent = scoreO;
//             }
//             animateWin(winningCombination);
//             setTimeout(resetGame, 1500);
//             return;
//         }

//         if (boardState.every(cell => cell !== null)) {
//             alert("It's a draw!");
//             setTimeout(resetGame, 1500);
//             return;
//         }

//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         currentPlayerDisplay.textContent = currentPlayer;
//     }

//     function checkWin() {
//         for (let i = 0; i < winningCombinations.length; i++) {
//             const [a, b, c] = winningCombinations[i];
//             if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
//                 winningCombination = winningCombinations[i];
//                 return true;
//             }
//         }
//         return false;
//     }

//     function animateWin(winningCombination) {
//         const [a, b, c] = winningCombination;
//         cells[a].classList.add('win-animation');
//         cells[b].classList.add('win-animation');
//         cells[c].classList.add('win-animation');
//     }

//     function resetGame() {
//         boardState.fill(null);
//         cells.forEach(cell => {
//             cell.textContent = '';
//             cell.classList.remove('win-animation');
//         });
//         currentPlayer = 'X';
//         currentPlayerDisplay.textContent = currentPlayer;
//         gameActive = true;
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    const scoreXDisplay = document.getElementById('scoreX');
    const scoreODisplay = document.getElementById('scoreO');
    const currentPlayerDisplay = document.getElementById('currentPlayer');
    let currentPlayer = 'X';
    let gameActive = true;
    let scoreX = 0;
    let scoreO = 0;
    const boardState = Array(9).fill(null);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });

    resetButton.addEventListener('click', resetGame);

    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute('data-index');

        if (boardState[index] !== null || !gameActive) {
            return;
        }

        cell.textContent = currentPlayer;
        boardState[index] = currentPlayer;

        if (checkWin()) {
            gameActive = false;
            if (currentPlayer === 'X') {
                scoreX++;
                scoreXDisplay.textContent = scoreX;
            } else {
                scoreO++;
                scoreODisplay.textContent = scoreO;
            }
            currentPlayerDisplay.textContent = `${currentPlayer} wins!`;
            animateWin(winningCombination);
            setTimeout(resetGame, 1500);
            return;
        }

        if (boardState.every(cell => cell !== null)) {
            gameActive = false;
            currentPlayerDisplay.textContent = "It's a draw!";
            setTimeout(resetGame, 1500);
            return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        currentPlayerDisplay.textContent = `Current Turn: ${currentPlayer}`;
    }

    function checkWin() {
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                winningCombination = winningCombinations[i];
                return true;
            }
        }
        return false;
    }

    function animateWin(winningCombination) {
        const [a, b, c] = winningCombination;
        cells[a].classList.add('win-animation');
        cells[b].classList.add('win-animation');
        cells[c].classList.add('win-animation');
    }

    function resetGame() {
        boardState.fill(null);
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('win-animation');
        });
        currentPlayer = 'X';
        currentPlayerDisplay.textContent = `Current Turn: ${currentPlayer}`;
        gameActive = true;
    }
});


