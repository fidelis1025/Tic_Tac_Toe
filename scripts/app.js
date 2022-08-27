gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

let editedPlayer = 0;
let activePlayer = 0;
let currentPlayer = 1;
let gameEnd = false;

const player1Btn = document.getElementById("player-1-btn");
const player2Btn = document.getElementById("player-2-btn");
const cancelConfig = document.getElementById("close-config");
const startGame = document.getElementById("start-game");

const playerConfigOverlay = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const emptyField = document.getElementById("player-info");
const errorOutput = document.getElementById("error");
const errorMessage = document.getElementById("error-msg");
const gameBoard = document.getElementById("in-game");
const beforeGame = document.getElementById("before-game");
const activePlayerElement = document.getElementById("player-name");
const gameFieldElement = document.querySelectorAll("#game-board li");
const gameFields = document.getElementById("game-board");
const gameOver = document.getElementById("game-over");

player1Btn.addEventListener("click", openOverlay);
player2Btn.addEventListener("click", openOverlay);

cancelConfig.addEventListener("click", closeOverlay);
backdrop.addEventListener("click", closeOverlay);

formElement.addEventListener("submit", savePlayerConfig);
startGame.addEventListener("click", startNewGame);

for (const GameField of gameFieldElement) {
  GameField.addEventListener("click", selectGameField);
}
