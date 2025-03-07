function Ship() {
  let length = 0;
  let timesHit = 0;
  let id;
  function setShipLength(size) {
    length = size;
  }

  function getShipLength() {
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

  /**
   *
   * @returns sunk status of ship
   */
  function isSunk() {
    return timesHit >= length ? true : false;
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

function Gameboard(shipsInfo) {
  /**
   * Initialize a constant 10*10 2D array with initial values as null
   */
  const boardGrid = Array.from({ length: 10 }, () => Array(10).fill(null));

  /**
   * Takes the ship, coordinates and alignment
   * @param {object} ship ship which will be placed
   * @param {number} startRow starting x-coordinate of ship
   * @param {number} startCol starting y-coordinate of ship
   * @param {string} layout ship alignment
   * @returns
   */
  function placeShip(ship, startRow, startCol, layout = "h") {
    // default layout state will be horizontal positioning;
    // h = horizontal
    // v = vertical
    // set marker in board for ship
    if (layout === "h") {
      if (startCol + ship.getShipLength() > 10) {
        // add oot of bound message later
        return;
      }
      for (let i = startCol; i < ship.getShipLength() + startCol; i++) {
        boardGrid[startRow][i] = ship.getId();
      }
    } else {
      // vertical ship placements
      if (startRow + ship.getShipLength() > 10) {
        // add message: Out of bound later
        return;
      }
      for (let i = startRow; i < ship.getShipLength() + startRow; i++) {
        boardGrid[i][startCol] = ship.getId();
      }
    }
  }

  /**
   * It takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
   * @param {number} x x-coordinate of ship
   * @param {number} y y-coordinate of ship
   */
  function receiveAttack(x, y) {
    const shipId = boardGrid[x][y];
    if (shipId !== null) {
      const ship = shipsInfo.find((ship) => ship.getId() === shipId);
      if (ship) {
        ship.hit();
      }
    } else {
      shipId = "miss";
    }
  }

  // Gameboards should be able to report whether or not all of their ships have been sunk.

  /**
   * Checks if all the ships have sunk
   */
  function checkAllShipStatus() {
    shipsInfo.forEach((ship) => {
      return ship.isSunk() ? true : false;
    }); // incomplete logic for now
  }
  return { placeShip, receiveAttack, checkAllShipStatus, boardGrid };
}

function Player() {
  const shipsInfo = [];
  const shipLengths = [5, 3, 3, 2, 2, 2, 1, 1, 1, 1]; // 10 ships of predetermined length
  const shipCoordinates = [];
  const shipAlignment = [];

  /**
   * Take the coordinates and alignment of ship and sets it accordingly
   * @param {number} x x-coordinate of the grid
   * @param {number} y y-coordinate of the grid
   * @param {string} alignment ship alignment
   */
  function setPositionAlignment(x, y, alignment) {
    shipCoordinates.push({ x, y });
    shipAlignment.push(alignment);
  }

  const gameboard = Gameboard(shipsInfo);

  function populateShips() {
    for (let i = 0; i < 10; i++) {
      const ship = Ship();
      ship.setId(i);
      ship.setShipLength(shipLengths[i]);
      shipsInfo.push(ship);
      gameboard.placeShip(
        ship,
        shipCoordinates[i].x,
        shipCoordinates[i].y,
        shipAlignment[i],
      );
    }
  }
  function makeMove() {
    gameboard.receiveAttack(x, y);
  }

  return { populateShips, setPositionAlignment, makeMove, gameboard, shipCoordinates };
}

export {
  Ship,
  Gameboard,
  Player,
};
