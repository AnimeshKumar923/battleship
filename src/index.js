import "./style.css";

function Ship() {
  let length = 0;
  let timesHit = 0;
  let id;
  // const isShipSunk = false;
  function setShipLength(size) {
    length = size;
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
    setId,
    getId,
  };
}

function Gameboard() {
  // Gameboards should be able to place ships at specific coordinates by calling the ship factory.

  const boardSize = Array.from({ length: 10 }, () => Array(10).fill(null)); // Correctly initializes a 10x10 array
  // will be constant size

  const ship1 = Ship();
  ship1.setShipLength(5);
  ship1.setId(1);
  placeShip(ship1);

  function placeShip(ship) {
    boardSize[6][2] = ship.getId();
    boardSize[6][3] = ship.getId();
    boardSize[6][4] = ship.getId();
    boardSize[6][5] = ship.getId();
  }
}

module.exports = {
  Ship,
  Gameboard,
};
