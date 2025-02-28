import "./style.css";

function Ship() {
  let length = 0;
  let timesHit = 0;
  let id;
  // const isShipSunk = false;
  function setShipLength(size) {
    length = size;
  }

  function getShipLength(size) {
    return length;
  }

  function setId(Newid) {
    id = Newid;
  }

  function getId() {
    return id;
  }

  function hit() {
    timesHit++;
  }

  function isSunk() {
    if (timesHit >= length) {
      return true;
    }
    return false;
  }

  return {
    isSunk,
    hit,
    setShipLength,
    getShipLength,
    setId,
    getId,
  };
}

function Gameboard() {
  // Gameboards should be able to place ships at specific coordinates by calling the ship factory.

  const boardGrid = Array.from({ length: 10 }, () => Array(10).fill(null)); // Correctly initializes a 10x10 array
  // will be constant size

  function placeShip(ship, startRow, startCol, layout = "h") {
    // default layout state will be horizontal positioning;
    // h = horizontal
    // v = vertical
    // set marker in board for ship
    if (layout === "h") {
      for (let i = startCol; i < ship.getShipLength() + startCol; i++) {
        boardGrid[startRow][i] = ship.getId();
      }
    } else {
      for (let i = startCol; i < ship.getShipLength() + startCol; i++) {
        boardGrid[i][startRow] = ship.getId();
      }
    }
  }

  return { placeShip };
}

function createShips() {
  const ship1 = Ship();
  ship1.setShipLength(5);
  ship1.setId(1);
  Gameboard.placeShip(ship1);
}

module.exports = {
  Ship,
  Gameboard,
};
