import { Player } from "./game-logic";

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
  computer.placeShipsOnBoard();

  console.log(computer.gameboard.boardGrid);

  console.log(computer.shipCoordinates);

  return { computer };
})();

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
  human.placeShipsOnBoard();
  // console.log(human);
  return { human };
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

/**
 * commented after testing the working functionality
 * un-comment to see the effect if required
 * before deploying, comment out to remove cmputer visibility
 */

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

(function attachEventListeners() {
  document.querySelectorAll("#computer-board > div").forEach((element) => {
    element.addEventListener("click", (e) => {
      const shipid = e.target.getAttribute("shipid");
      let x = Math.floor(shipid / 10);
      let y = shipid % 10;

      console.log(`Clicked div with shipId: ${shipid}`);

      let hitResult = computer.gameboard.receiveAttack(x, y);
      console.log(hitResult);

      if (hitResult) {
        e.target.style.border = "2px solid red";
        e.target.style.backgroundColor = "red";
      } else {
        e.target.style.border = "2px solid yellow";
        e.target.style.backgroundColor = "#e3fc0688";
      }
    });
  });
})();

// remove after debugging session
document
  .querySelector(".show-gameboard-computer")
  .addEventListener("click", () => {
    console.log(computer.gameboard.boardGrid);
    console.log(computer.shipsInfo);
    computer.shipsInfo.forEach((ship) => {
      console.log(`Ship ${ship.getId()} length: ${ship.getShipLength()}`);
      console.log(`Ship ${ship.isSunk()}`);
    });
  });
