class Food {
  constructor() {
    this.coordinates = { x: 10, y: 10 };
    // this.gridSize = 30;
    // this.growSnake = 0;
  }

  drawFood(snakeBoard) {
    const foodElm = document.createElement("div");
    //set coordinates
    foodElm.style.gridRowStart = this.coordinates.x;
    foodElm.style.gridColumnStart = this.coordinates.y;

    foodElm.classList.add("food");
    snakeBoard.appendChild(foodElm);
    // console.log("this.coordinates.x ", this.coordinates.x);
    // this.coordinates.x = Math.floor(Math.random() * this.gridSize) + 1;
    // this.coordinates.y = Math.floor(Math.random() * this.gridSize) + 1;
  }

  // randomFoodPosition() {
  //   console.log("this.coordinates.x ", this.coordinates.x);
  //   this.coordinates.x = Math.floor(Math.random() * this.gridSize) + 1;
  //   this.coordinates.y = Math.floor(Math.random() * this.gridSize) + 1;
  // }
}
