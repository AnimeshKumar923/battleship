const { Ship, Gameboard, Player } = require("./game-logic");

test("ship is floating", () => {
  const s1 = Ship();
  s1.setShipLength(5);
  s1.hit();
  s1.hit();
  s1.hit();
  expect(s1.isSunk()).toBe(false);
});

test("ship is sunk", () => {
  const s1 = Ship();
  s1.setShipLength(5);
  s1.hit();
  s1.hit();
  s1.hit();
  s1.hit();
  s1.hit();
  expect(s1.isSunk()).toBe(true);
});

test("placeShip function is working", () => {
  const ship1 = Ship();
  ship1.setShipLength(5);
  ship1.setId(1);
  const gameboard = Gameboard();
  gameboard.placeShip(ship1, 5, 1);
  expect(gameboard.boardGrid[5][1]).toBe(1);
  expect(gameboard.boardGrid[5][2]).toBe(1);
  expect(gameboard.boardGrid[5][3]).toBe(1);
  expect(gameboard.boardGrid[5][4]).toBe(1);
  expect(gameboard.boardGrid[5][5]).toBe(1);
});

test("ship is placed horizontally", () => {
  const ship1 = Ship();
  ship1.setShipLength(5);
  ship1.setId(1);
  const gameboard = Gameboard();
  gameboard.placeShip(ship1, 6, 2, "h");
  expect(gameboard.boardGrid[6][2]).toBe(1);
  expect(gameboard.boardGrid[6][3]).toBe(1);
  expect(gameboard.boardGrid[6][4]).toBe(1);
  expect(gameboard.boardGrid[6][5]).toBe(1);
  expect(gameboard.boardGrid[6][6]).toBe(1);
});

test("ship placed is vertically", () => {
  const ship1 = Ship();
  ship1.setShipLength(5);
  ship1.setId(1);
  const gameboard = Gameboard();
  gameboard.placeShip(ship1, 6, 2, "v");
  expect(gameboard.boardGrid[2][6]).toBe(1);
  expect(gameboard.boardGrid[3][6]).toBe(1);
  expect(gameboard.boardGrid[4][6]).toBe(1);
  expect(gameboard.boardGrid[5][6]).toBe(1);
  expect(gameboard.boardGrid[6][6]).toBe(1);
  expect().toBe();
});

test("check if board is populating as expected", () => {
  const shipsInfo = [];
  const shipLengths = [5, 3, 3, 2, 2, 2, 1, 1, 1, 1];
  const shipCoordinates = [
    { x: 6, y: 2 },
    { x: 2, y: 1 },
    { x: 4, y: 7 },
    { x: 4, y: 2 },
    { x: 4, y: 5 },
    { x: 8, y: 6 },
    { x: 9, y: 1 },
    { x: 9, y: 4 },
    { x: 5, y: 0 },
    { x: 8, y: 7 },
  ];
  const shipAlignment = ["h", "h", "v", "h", "v", "h", "h", "h", "h", "h"];

  const gameboard = Gameboard(shipsInfo);

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
  expect(gameboard.boardGrid[6][2]).toBe(0);
  expect(gameboard.boardGrid[6][6]).toBe(0);
  expect(gameboard.boardGrid[2][1]).toBeTruthy();
  expect(gameboard.boardGrid[2][2]).toBeTruthy();
  expect(gameboard.boardGrid[2][3]).toBeTruthy();
  expect(gameboard.boardGrid[2][3]).toBeTruthy();
  expect(gameboard.boardGrid[2][4]).toBeNull();
});

test("populate RowStart and ColStart array", () => {
  const human = Player();
  human.populateShips();
  expect(human.gameboard.boardGrid[6][2]).toBe(0);
  expect(human.gameboard.boardGrid[6][6]).toBe(0);
  expect(human.gameboard.boardGrid[2][1]).toBeTruthy();
  expect(human.gameboard.boardGrid[2][2]).toBeTruthy();
  expect(human.gameboard.boardGrid[2][3]).toBeTruthy();
  expect(human.gameboard.boardGrid[2][3]).toBeTruthy();
  expect(human.gameboard.boardGrid[2][4]).toBeNull();
});
