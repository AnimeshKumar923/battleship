// Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.
const { Ship, Gameboard, Player } = require("./game-logic").default;

// const { Ship, Gameboard, Player } = require("./game-logic").default;

function initializeHuman() {
  const human = Player();
  // human.setPositionAlignment(5, 0, "v");
  // human.setPositionAlignment(4, 2, "h");
  // human.setPositionAlignment(5, 6, "v");
  // human.setPositionAlignment(9, 8, "h");
  // human.setPositionAlignment(7, 3, "h");
  // human.setPositionAlignment(3, 7, "h");
  // human.setPositionAlignment(1, 6, "h");
  // human.setPositionAlignment(2, 3, "h");
  // human.setPositionAlignment(0, 9, "h");
  // human.setPositionAlignment(1, 0, "h");
  // human.populateShips();
};


function initializeComputer() {
  const computer = Player();
  computer.setPositionAlignment(5, 0, "v");
  computer.setPositionAlignment(4, 2, "h");
  computer.setPositionAlignment(5, 6, "v");
  computer.setPositionAlignment(9, 8, "h");
  computer.setPositionAlignment(7, 3, "h");
  computer.setPositionAlignment(3, 7, "h");
  computer.setPositionAlignment(1, 6, "h");
  computer.setPositionAlignment(2, 3, "h");
  computer.setPositionAlignment(0, 9, "h");
  computer.setPositionAlignment(1, 0, "h");
  computer.populateShips();
};

function createBoard(boardId) {
  const board = document.querySelector(boardId);
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.className =``
    board.appendChild(cell);
  }
}

createBoard("#player1-board");
createBoard("#player2-board");
