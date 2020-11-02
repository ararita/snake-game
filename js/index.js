const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");
// console.log(snakeGame);
// console.log(snakeBoard);

// snakeGame.drawSnake(snakeBoard);
function draw() {
  snakeBoard.innerHTML = "";
  snakeGame.drawSnake(snakeBoard);
}

// function update() {}
function move() {
  snakeGame.moveSnake();
}

draw();
move();

//settimeout/setinterval for each sec, and change coordinates

//another var -  direction to move
// depending on dir,

//position, direction to know
