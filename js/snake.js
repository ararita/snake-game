class SnakeGame {
  constructor() {
    // this.x = 11;
    // this.y = 11;
    this.snakeBody = [{ x: 11, y: 11 }];
  }
  drawSnake(snakeBoard) {
    // console.log("this will be draw snake");
    // console.log("snakeBody", this.snakeBody);

    this.snakeBody.forEach((gridSegment) => {
      console.log("gridSegment", gridSegment);
      const snakeElm = document.createElement("div");
      //set coordinates
      snakeElm.style.gridRowStart = gridSegment.x;
      snakeElm.style.gridColumnStart = gridSegment.y;
      snakeElm.classList.add("snake");
      snakeBoard.appendChild(snakeElm);
    });
  }
}
