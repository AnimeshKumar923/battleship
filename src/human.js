const { Ship, Gameboard, Player } = require("./game-logic").default;

(function initializeHuman() {
  const human = Player();
  human.setPositionAlignment(5, 0, "v");
  human.setPositionAlignment(4, 2, "h");
  human.setPositionAlignment(5, 6, "v");
  human.setPositionAlignment(9, 8, "h");
  human.setPositionAlignment(7, 3, "h");
  human.setPositionAlignment(3, 7, "h");
  human.setPositionAlignment(1, 6, "h");
  human.setPositionAlignment(2, 3, "h");
  human.setPositionAlignment(0, 9, "h");
  human.setPositionAlignment(1, 0, "h");
  human.populateShips();
})();
