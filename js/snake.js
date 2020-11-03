class SnakeGame {
  constructor() {
    this.snakeBody = [
      // { x: 15, y: 17 },
      { x: 15, y: 16 },
    ];
    this.direction = "right";
    this.isSnakeDead = false;
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
    if (this.direction === "right") {
      this.snakeBody[0].y++;
    } else if (this.direction === "left") {
      this.snakeBody[0].y--;
    } else if (this.direction === "up") {
      this.snakeBody[0].x--;
    } else if (this.direction === "down") {
      this.snakeBody[0].x++;
    }
    this.dead();
  }

  dead() {
    if (
      this.snakeBody[0].x > 30 ||
      this.snakeBody[0].y > 30 ||
      this.snakeBody[0].x < 0 ||
      this.snakeBody[0].y < 0
    ) {
      this.isSnakeDead = true;
    }
  }

  changeDirection(e) {
    console.log("change direction");
    if (e.keyCode === 39) {
      this.direction = "right";
    } else if (e.keyCode === 40) {
      this.direction = "down";
    } else if (e.keyCode === 37) {
      this.direction = "left";
    } else if (e.keyCode === 38) {
      this.direction = "up";
    }
  }
}
