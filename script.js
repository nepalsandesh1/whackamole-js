window.onload = () => {
  startGame();
};
let currentMolePosition;
let currentPlantPosition;
function startGame() {
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = i.toString();
    document.getElementById("board").appendChild(newDiv);
  }
  setInterval(() => {
    setMole();
  }, 1000);
  setInterval(() => {
    setPlant();
  }, 2000);
}

function setMole() {
  let moleDiv = document.createElement("img");
  moleDiv.src = "./monty-mole.png";
  let randomNum = Math.floor(Math.random() * 9);
  currentMolePosition = document.getElementById(randomNum);
  currentMolePosition.appendChild(moleDiv);
}

function setPlant() {
  let plantDiv = document.createElement("img");
  plantDiv.src = "./piranha-plant.png";
  let randomNum = Math.floor(Math.random() * 9);
  currentPlantPosition = document.getElementById(randomNum);
  currentMolePosition.appendChild(plantDiv);
}
