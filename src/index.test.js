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

test("overlapping position", () => {
  expect().toBe();
});

test("position already occupied", () => {
  expect().toBe();
});

test("position not occupied", () => {
  expect().toBe();
});