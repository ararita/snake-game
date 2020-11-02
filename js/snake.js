class SnakeGame {
  constructor() {
    this.snakeBody = [{ x: 15, y: 16 }];
  }
  drawSnake(snakeBoard) {
    // console.log("this will be draw snake");
    // console.log("snakeBody", this.snakeBody);

    this.snakeBody.forEach((gridSegment) => {
      // console.log("gridSegment", gridSegment);
      const snakeElm = document.createElement("div");
      //set coordinates
      snakeElm.style.gridRowStart = gridSegment.x;
      snakeElm.style.gridColumnStart = gridSegment.y;

      snakeElm.classList.add("snake");
      snakeBoard.appendChild(snakeElm);
    });
  }
  moveSnake() {
    let snake = document.querySelector(".snake");
    // console.log("snake", snake);
    snake = this.snakeBody[0].y++;
    // console.log("snakebody", this.snakeBody);
  }
  //   updateSnake() {}
}
