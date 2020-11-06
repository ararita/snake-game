const snakeGame = new SnakeGame();
const food = new Food();
const snakeBoard = document.getElementById("snake-board");
let soundOffImg = document.querySelector(".soundoff");

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
  snakeGame.playMusic();
  food.drawFood(snakeBoard);
}

draw();

soundOffImg.addEventListener("click", () => {
  console.log("clicked");
  if (snakeGame.playSound === true) {
    snakeGame.playSound = false;
  } else {
    snakeGame.playSound = true;
  }
});

window.addEventListener("keydown", (e) => {
  snakeGame.changeDirection(e);
});
