window.onload = () => {
  startGame();
};
let currentMolePosition;
let currentPlantPosition;
let gameOver = false;
let userScore = 0;
function startGame() {
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = i.toString();
    newDiv.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(newDiv);
  }
  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currentMolePosition) {
    currentMolePosition.innerHTML = "";
  }
  let moleDiv = document.createElement("img");
  moleDiv.src = "./monty-mole.png";
  let randomNum = Math.floor(Math.random() * 9);
  if (currentPlantPosition && currentPlantPosition.id == randomNum) {
    return;
  }
  currentMolePosition = document.getElementById(randomNum);
  currentMolePosition.appendChild(moleDiv);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currentPlantPosition) {
    currentPlantPosition.innerHTML = "";
  }
  let plantDiv = document.createElement("img");
  plantDiv.src = "./piranha-plant.png";
  let randomNum = Math.floor(Math.random() * 9);
  if (currentMolePosition && currentMolePosition.id == randomNum) {
    return;
  }
  currentPlantPosition = document.getElementById(randomNum);
  currentPlantPosition.appendChild(plantDiv);
}

function selectTile() {
  if (this == currentMolePosition) {
    userScore += 10;
    document.getElementById("score").innerText =
      "Current Score: " + userScore.toString();
    console.log("Clicked");
  }
  if (this == currentPlantPosition) {
    document.getElementById("score").innerText =
      "Game Over Your Score: " + userScore;
    gameOver = true;
  }
}
