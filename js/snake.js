class SnakeGame {
  constructor() {
    this.snakeBody = [
      { x: 15, y: 17 },
      { x: 15, y: 16 },
    ];
    this.direction = "right";
  }
  drawSnake(snakeBoard) {
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
    // console.log("snakeBody", this.snakeBody);
    let snake = document.querySelector(".snake");
    // console.log("snake", snake);
    // console.log("snakebody", this.snakeBody);

    if (this.direction === "right") {
      this.snakeBody[0].y++;
    } else if (this.direction === "left") {
      this.snakeBody[0].y--;
    } else if (this.direction === "up") {
      this.snakeBody[0].x--;
    } else if (this.direction === "down") {
      this.snakeBody[0].x++;
    }
  }

  changeDirection() {
    console.log("change direction");
  }
}
