let turnX = true;
let playing = true;

let xWins = 0;
let oWins = 0;

let positions = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const winCombos = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];


function ticPosition(button) {
    if (positions.includes(button.id) && playing) {
        document.getElementById(button.id).classList.remove("empty");
        if (turnX) {
            document.getElementById(button.id).classList.add("x");
            positions[button.id] = "x";
        } else {
            document.getElementById(button.id).classList.add("o");
            positions[button.id] = "o";
        }
        if (winCheck()) {
            if (turnX) {
                playing = false;
                xWins++;
                document.getElementById("xcount").textContent = xWins.toString();
                console.log("Player X won");
            } else {
                playing = false;
                oWins++;
                document.getElementById("ocount").textContent = oWins.toString();
                console.log("Player O won");
            }
        }
        turnX = !turnX;
    }
}

function winCheck() {
    for (const combo of winCombos) {
        if (positions[combo[0]] === positions[combo[1]] && positions[combo[1]] === positions[combo[2]]) {
            document.getElementById(combo[0]).classList.add("green");
            document.getElementById(combo[1]).classList.add("green");
            document.getElementById(combo[2]).classList.add("green");
            return true;
        }
    }
    return false;
}

function reset() {
    positions = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    playing = true;
    turnX = true;
    positions.forEach(id => {
        document.getElementById(id).classList.remove("o");
        document.getElementById(id).classList.remove("x");
        document.getElementById(id).classList.remove("green");
        document.getElementById(id).classList.add("empty");
    });
}