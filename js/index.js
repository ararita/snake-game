const snakeGame = new SnakeGame();
const food = new Food();
const snakeBoard = document.getElementById("snake-board");

function draw() {
  update();
  let timer = setTimeout(() => {
    this.draw();
  }, 150);
  if (snakeGame.isSnakeDead === true) {
    clearTimeout(timer);
  }
}

function update() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
  snakeGame.moveSnake(food);
  food.drawFood(snakeBoard);
}

draw();

window.addEventListener("keydown", (e) => {
  snakeGame.changeDirection(e);
});
