const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");

function draw() {
  update();

  setTimeout(() => {
    this.draw();
  }, 800);
}

function update() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
  snakeGame.moveSnake();
}

draw();

window.addEventListener("keydown", (e) => {
  // console.log("bla");
  console.log(e.keyCode);
  if (e.keyCode === 39) {
    console.log("right arrow");
  } else if (e.keyCode === 40) {
    console.log("down arrow");
  } else if (e.keyCode === 37) {
    console.log("left arrow");
  } else if (e.keyCode === 38) {
    console.log("up arrow");
  }
});
