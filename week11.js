window.addEventListener("load", () =>{
    
const tiles = Array.from(document.querySelectorAll('.ttt'));




let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'O';
let isGameActive = true;

const xWin = "X Wins!";
const oWin = "O Wins!";
const tie = "Tie game :(";


const winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function resultCheck(){
    let gameWon = false;
    for( let i = 0; i<= 7; i++) {
        const winState = winStates[i];
        
    }
}

});