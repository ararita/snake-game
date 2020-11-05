class Food {
  constructor() {
    this.coordinates = { x: 10, y: 10 };
  }

  drawFood(snakeBoard) {
    const foodElm = document.createElement("div");
    //set coordinates
    foodElm.style.gridRowStart = this.coordinates.x;
    foodElm.style.gridColumnStart = this.coordinates.y;

    foodElm.classList.add("food");
    snakeBoard.appendChild(foodElm);
  }
}
