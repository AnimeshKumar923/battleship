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
      // vertical ship placements
      for (let i = startCol; i < ship.getShipLength() + startCol; i++) {
        boardGrid[i][startRow] = ship.getId();
      }
    }
  }

  // Gameboards should have a (receiveAttack) function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
  function receiveAttack(x, y) {
    if (boardGrid[x][y] !== null) {
    }
  }

  return { placeShip, boardGrid };
}

// made it IIFE; as soon as the page loads, these ships with sizes will be created
(function createShips() {
  // by default there will be 10 ships of different sizes
  const gameboard = Gameboard();
  const ships = [];
  const shipLengths = [5, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  const shipRowStartCoordinate = [6, 2, 4, 4, 4, 8, 9, 9, 5, 8];
  const shipColStartCoordinate = [2, 1, 7, 2, 6, 6, 1, 4, 0, 7];
  for (let i = 0; i < 10; i++) {
    const ship = Ship();
    ship.setId(i);
    ship.setShipLength(shipLengths[i]);
    ships.push(ship);
    gameboard.placeShip(
      ship,
      shipRowStartCoordinate[i],
      shipColStartCoordinate[i],
      "h",
    );
  }
  // ship1.setShipLength(5);
})();

module.exports = {
  Ship,
  Gameboard,
};
