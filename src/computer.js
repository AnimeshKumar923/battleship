// Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.
import { Ship, Gameboard, Player } from "./game-logic";
// const  = default;

// const { Ship, Gameboard, Player } = require("./game-logic").default;

const { human } = (function initializeHuman() {
  const human = Player();
  human.setPositionAlignment(6, 2, "h");
  human.setPositionAlignment(2, 1, "h");
  human.setPositionAlignment(2, 9, "v");
  human.setPositionAlignment(3, 6, "v");
  human.setPositionAlignment(8, 6, "h");
  human.setPositionAlignment(4, 2, "h");
  human.setPositionAlignment(9, 1, "h");
  human.setPositionAlignment(0, 5, "h");
  human.setPositionAlignment(9, 4, "h");
  human.setPositionAlignment(6, 8, "h");
  human.populateShips();
  console.log(human);
  return { human };
})();

const { computer } = (function initializeComputer() {
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

  // console.log(computer.gameboard.boardGrid[5][0]);
  // console.log(computer.gameboard.boardGrid[4][2]);
  // console.log(computer.gameboard.boardGrid[4][3]);
  // console.log(computer.gameboard.boardGrid[4][4]);
  console.log(computer.gameboard.boardGrid);

  console.log(computer.shipCoordinates);

  return { computer };
})();

function createBoard(boardId) {
  const board = document.querySelector(boardId);
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    // cell.se = `${i}`;
    cell.setAttribute("shipid", i);
    board.appendChild(cell);
  }
}

createBoard("#human-board");
createBoard("#computer-board");

(function setHumanShipBorders() {
  const cells = document.querySelectorAll("#human-board > div");
  for (let i = 0; i < human.shipsInfo.length; i++) {
    const { x, y } = human.shipCoordinates[i];
    const alignment = human.shipAlignment[i];
    const shipLength = human.shipLengths[i];

    if (alignment === "h") {
      for (let j = 0; j < shipLength; j++) {
        const cellIndex = x * 10 + (y + j);
        cells[cellIndex].style.border = "2px solid yellow";
      }
    } else {
      for (let j = 0; j < shipLength; j++) {
        const cellIndex = (x + j) * 10 + y;
        cells[cellIndex].style.border = "2px solid yellow";
      }
    }
  }
})();

(function setComputerShipBorders() {
  const cells = document.querySelectorAll("#computer-board > div");
  for (let i = 0; i < computer.shipsInfo.length; i++) {
    const { x, y } = computer.shipCoordinates[i];
    const alignment = computer.shipAlignment[i];
    const shipLength = computer.shipLengths[i];

    if (alignment === "h") {
      for (let j = 0; j < shipLength; j++) {
        const cellIndex = x * 10 + (y + j);
        cells[cellIndex].style.border = "2px solid #ff00bf";
      }
    } else {
      for (let j = 0; j < shipLength; j++) {
        const cellIndex = (x + j) * 10 + y;
        cells[cellIndex].style.border = "2px solid #ff00bf";
      }
    }
  }
})();
