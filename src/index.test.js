const { Ship, Gameboard } = require("./index");

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

test("check overlapping position", () => {
  expect().toBe();
});

test("position already occupied", () => {
  expect().toBe();
});

test("position not occupied", () => {
  expect().toBe();
});
