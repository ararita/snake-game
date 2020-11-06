const snakeGame = new SnakeGame();
const food = new Food();
const snakeBoard = document.getElementById("snake-board");

function draw() {
  update();
  snakeGame.speed =
    snakeGame.startingSpeed - Math.floor(snakeGame.score / 2) * 20;
  console.log("speed", snakeGame.speed);

  let timer = setTimeout(() => {
    this.draw();
  }, snakeGame.speed);
  if (snakeGame.isSnakeDead === true) {
    clearTimeout(timer);
  }
}

function update() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
  snakeGame.moveSnake(food);
  // snakeGame.checkIfPlaying();
  snakeGame.playMusic();
  food.drawFood(snakeBoard);
}

draw();

window.addEventListener("keydown", (e) => {
  snakeGame.changeDirection(e);
});
