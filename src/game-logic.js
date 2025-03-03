function Ship() {
  let length = 0;
  let timesHit = 0;
  let id;
  // const isShipSunk = false;
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
  // Gameboards should be able to place ships at specific coordinates by calling the ship factory.

  const boardGrid = Array.from({ length: 10 }, () => Array(10).fill(null)); // Correctly initializes a 10x10 array
  // will be constant size

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

  // Gameboards should have a (receiveAttack) function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
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

  // Gameboards should keep track of missed attacks so they can display them properly.
  // => fulfilled by marking the location as 'miss'

  // Gameboards should be able to report whether or not all of their ships have been sunk.
  function checkAllShipStatus() {
    shipsInfo.forEach((ship) => {
      return ship.isSunk() ? true : false;
    });
  }
  return { placeShip, receiveAttack, checkAllShipStatus, boardGrid };
}

function Player() {
  // There will be two types of players in the game, ‘real’ players and ‘computer’ players.
  const shipsInfo = [];
  const shipLengths = [5, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  const shipCoordinates = [
    // example data format
    // { x: 6, y: 2 },
    // { x: 2, y: 1 },
    // { x: 4, y: 7 },
    // { x: 4, y: 2 },
    // { x: 4, y: 5 },
    // { x: 8, y: 6 },
    // { x: 9, y: 1 },
    // { x: 9, y: 4 },
    // { x: 5, y: 0 },
    // { x: 8, y: 7 },
  ];
  const shipAlignment = [];
  // const shipAlignment = ["h", "h", "v", "h", "v", "h", "h", "h", "h", "h"];

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

  return { populateShips, setPositionAlignment, makeMove, gameboard };
  // Each player object should contain its own gameboard.
}

// types of players
// const human = Player();
const computer = Player();

// computer.populateShips();
// computer.setShipCoordinates();
// human.gameboard.boardGrid[0][0]

module.exports = {
  Ship,
  Gameboard,
  Player,
};
