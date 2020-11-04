class SnakeGame {
  constructor() {
    this.snakeBody = [{ x: 15, y: 16 }];
    this.direction = "right";
    this.isSnakeDead = false;
    this.gridSize = 30;
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

  moveSnake(food) {
    let snakeHead = { x: this.snakeBody[0].x, y: this.snakeBody[0].y };
    //move head
    if (this.direction === "right") {
      snakeHead.y++;
    } else if (this.direction === "left") {
      snakeHead.y--;
    } else if (this.direction === "up") {
      snakeHead.x--;
    } else if (this.direction === "down") {
      snakeHead.x++;
    }
    this.snakeBody.unshift(snakeHead);
    // this.snakeBody.pop();

    if (
      //how do i make sure that food doesn't appear somewhere under
      //the snake body, once the snake grows?
      snakeHead.x === food.coordinates.x &&
      snakeHead.y === food.coordinates.y
    ) {
      //display the food randomly
      food.coordinates.x = Math.floor(Math.random() * this.gridSize) + 1;
      food.coordinates.y = Math.floor(Math.random() * this.gridSize) + 1;
    } else {
      this.snakeBody.pop();
    }
    this.dead(snakeHead);
  }

  dead(snakeHead) {
    // console.log("snake body from dead fn", this.snakeBody);
    //check if the head coordinates has collided with any of the body coordinates
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (
        snakeHead.x === this.snakeBody[i].x &&
        snakeHead.y === this.snakeBody[i].y
      ) {
        this.isSnakeDead = true;
      }
    }
    if (
      snakeHead.x > 30 ||
      snakeHead.y > 30 ||
      snakeHead.x < 0 ||
      snakeHead.y < 0
    ) {
      this.isSnakeDead = true;
    }
  }

  changeDirection(e) {
    console.log("change direction");
    if (e.keyCode === 39 && this.direction !== "left") {
      this.direction = "right";
    } else if (e.keyCode === 40 && this.direction !== "up") {
      this.direction = "down";
    } else if (e.keyCode === 37 && this.direction !== "right") {
      this.direction = "left";
    } else if (e.keyCode === 38 && this.direction !== "down") {
      this.direction = "up";
    }
  }
}
