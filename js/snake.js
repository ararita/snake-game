class SnakeGame {
  constructor() {
    this.snakeBody = [{ x: 15, y: 16 }];
    this.direction = "right";
    this.isSnakeDead = false;
    this.gridSize = 30;
    this.score = 0;
    this.startingSpeed = 200;
    this.speed = this.startingSpeed;
    this.playSound = true;
  }
  drawSnake(snakeBoard) {
    // this.playMusic();
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

  playMusic() {
    let rainforest = document.getElementById("rainforest");
    this.playSound === true ? rainforest.play() : rainforest.pause();
  }

  snakeDirection(snakeHead) {
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
  }

  displayFoodRandomly() {
    food.coordinates.x = Math.floor(Math.random() * this.gridSize) + 1;
    food.coordinates.y = Math.floor(Math.random() * this.gridSize) + 1;
  }

  snakeFoodCollisionCheck(snakeBody) {
    snakeBody.forEach((gridSegment) => {
      if (
        food.coordinates.x === gridSegment.x &&
        food.coordinates.y === gridSegment.y
      ) {
        this.displayFoodRandomly();
      }
    });
  }

  moveSnake(food) {
    let snakeHead = { x: this.snakeBody[0].x, y: this.snakeBody[0].y };

    this.snakeDirection(snakeHead);
    this.snakeBody.unshift(snakeHead);

    if (
      snakeHead.x === food.coordinates.x &&
      snakeHead.y === food.coordinates.y
    ) {
      //add sound
      document.getElementById("sound").play();
      //add score
      let scoreEl = document.querySelector(".score > h2 > span");
      scoreEl.innerHTML = this.score += 1;

      this.displayFoodRandomly();
      this.snakeFoodCollisionCheck(this.snakeBody);
    } else {
      this.snakeBody.pop();
    }
    this.dead(snakeHead);
  }

  dead(snakeHead) {
    for (let i = 1; i < this.snakeBody.length; i++) {
      if (
        snakeHead.x === this.snakeBody[i].x &&
        snakeHead.y === this.snakeBody[i].y
      ) {
        this.isSnakeDead = true;
        this.playSound = false;
      }
    }
    if (
      snakeHead.x > 30 ||
      snakeHead.y > 30 ||
      snakeHead.x < 1 ||
      snakeHead.y < 1
    ) {
      this.isSnakeDead = true;
      this.playSound = false;
    }
    if (this.isSnakeDead === true) {
      let popupEl = document.querySelector(".popup");
      popupEl.style.visibility = "visible";
      // popupEl.style.transition = "ease-in";
    }
  }

  changeDirection(e) {
    // console.log("change direction");
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
