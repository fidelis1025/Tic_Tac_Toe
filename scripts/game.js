function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    errorMessage.textContent = "Enter Player Name";
    return;
  }
  gameBoard.style.display = "block";
  activePlayerElement.textContent = players[activePlayer].name;

  resetGame();
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedRow = selectedField.dataset.row;
  const selectedColumn = selectedField.dataset.col;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("Select another Field");
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  checkForGameOver();

  const winnerId = checkForGameOver();

  if (winnerId != 0) {
    endGame(winnerId);
  }
  currentPlayer++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] == gameData[i][1] &&
      gameData[i][1] == gameData[i][2]
    ) {
      return gameData[i][0];
    }
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] == gameData[1][i] &&
      gameData[1][i] == gameData[2][i]
    ) {
      return gameData[0][i];
    }

    if (
      gameData[0][0] > 0 &&
      gameData[0][0] == gameData[1][1] &&
      gameData[1][1] == gameData[2][2]
    ) {
      return gameData[0][0];
    }
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] == gameData[1][1] &&
      gameData[1][1] == gameData[0][2]
    ) {
      return gameData[2][0];
    }

    if (currentPlayer === 9) {
      return -1;
    }
  }
  return 0;
}

function endGame(winnerId) {
  gameOver.style.display = "block";
  gameEnd = true;

  if (winnerId > 0) {
    gameOver.firstElementChild.firstElementChild.textContent =
      players[winnerId - 1].name;
  } else {
    gameOver.firstElementChild.textContent = "DRAW !!!";
  }
}

function resetGame() {
  activePlayer = 0;
  editedPlayer = 0;
  currentPlayer = 1;
  gameEnd = false;
  gameOver.firstElementChild.innerHTML =
    'You Won!!!<span id="game-end">PLAYER NAME</span>';

  gameOver.style.display = "none";


  let gameBoardIndex = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      gameField = gameFields.children[gameBoardIndex];
      gameField.textContent = "";
      gameField.classList.remove("disabled");
      gameBoardIndex++;
    }
  }
}


