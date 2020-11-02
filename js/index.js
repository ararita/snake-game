const snakeGame = new SnakeGame();
const snakeBoard = document.getElementById("snake-board");
// console.log(snakeGame);
// console.log(snakeBoard);

// function draw() {
//   snakeBoard.innerHTML = "";
//   snakeGame.drawSnake(snakeBoard);
//   console.log("test");
//   snakeGame.moveSnake();
//   setTimeout(() => {
//     this.draw();
//   }, 800);
// }

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
// move();

//another var -  direction to move
// depending on dir,

//position, direction to know
