const correctPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const board = new Array(9);
board.fill('-');

let movesPassed = 0;
let hasWon = false;
let turnX = true;

function checkWin(cssClass) {
    correctPositions.forEach(position => {
        if (board[position[0]] === cssClass &&
            board[position[1]] === cssClass &&
            board[position[2]] === cssClass) {

            hasWon = true;
        }
    });
}

function resetBoard() {

    for (let i = 0; i < board.length; i++) {
        document.getElementById(i.toString()).className = 'spot-empty';
        board[i] = '-';
    }
    turnX = true;
    movesPassed = 0;
    hasWon = false;
}

function setSpot(element) {
    if (board[element.id] === '-' && !hasWon) {

        const cssClass = turnX ? 'spot-x' : 'spot-o';

        element.className = cssClass;
        board[element.id] = cssClass;
        checkWin(cssClass);

        if (hasWon || movesPassed >= 9) {
            setTimeout(resetBoard, 5000);
        } else {
            movesPassed++;
            turnX = !turnX;
        }
    }
}