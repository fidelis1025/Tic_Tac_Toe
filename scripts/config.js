function openOverlay(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closeOverlay() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  emptyField.classList.remove("error");
  errorOutput.textContent = "";
  emptyField.children[1].value = ''
  errorMessage.textContent = ''
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formInfo = new FormData(event.target);
  const enteredPlayerName = formInfo.get("playername").trim();

  if (!enteredPlayerName) {
    emptyField.classList.add("error");
    errorOutput.textContent = "Please enter valid name";
    return;
  }

  const updatedPlayer = document.getElementById(
    "player-" + editedPlayer + "-config"
  );

  updatedPlayer.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  closeOverlay();
}
