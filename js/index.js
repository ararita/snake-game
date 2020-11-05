const snakeGame = new SnakeGame();
const food = new Food();
const snakeBoard = document.getElementById("snake-board");

let speed = 150;
if (snakeGame.score >= 2) {
  speed -= 10;
}
function draw() {
  update();
  snakeGame.speed =
    snakeGame.startingSpeed - Math.floor(snakeGame.score / 5) * 10;
  console.log("speed", snakeGame.speed);
  let timer = setTimeout(() => {
    this.draw();
  }, speed);
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
