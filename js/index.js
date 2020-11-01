const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");
// console.log(snakeGame);
// console.log(snakeBoard);

// snakeGame.drawSnake(snakeBoard);
function draw() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
}

draw();
