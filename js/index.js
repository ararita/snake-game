const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");

function draw() {
  update();
  setTimeout(() => {
    this.draw();
  }, 300);
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
