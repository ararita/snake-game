const snakeGame = new SnakeGame();
const food = new Food();
const snakeBoard = document.getElementById("snake-board");

let speed = 150;
if (snakeGame.score % 2 === 0) {
  speed -= 20;
}
function draw() {
  update();

  let timer = setTimeout(() => {
    this.draw();
  }, speed);
  if (snakeGame.isSnakeDead === true) {
    clearTimeout(timer);
  }
  // if (snakeGame.score >= 2) {
  //   timer = setTimeout(() => {
  //     this.draw();
  //   }, 120);
  // }
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
