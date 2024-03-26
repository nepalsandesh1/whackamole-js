window.onload = () => {
  startGame();
};
let currentMolePosition;
function startGame() {
  for (let i = 0; i < 9; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = i.toString();
    document.getElementById("board").appendChild(newDiv);
  }
  setMole();
}

function setMole() {
  let moleDiv = document.createElement("img");
  moleDiv.src = "./monty-mole.png";
  let randomNum = Math.floor(Math.random() * 9);
  currentMolePosition = document.getElementById(randomNum);
  currentMolePosition.appendChild(moleDiv);
}
