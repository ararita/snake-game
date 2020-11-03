const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");

function draw() {
  update();
  let timer = setTimeout(() => {
    this.draw();
  }, 300);
  if (snakeGame.isSnakeDead === true) {
    clearTimeout(timer);
  }
}

function update() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
  snakeGame.moveSnake();
}

draw();

window.addEventListener("keydown", (e) => {
  snakeGame.changeDirection(e);
});
