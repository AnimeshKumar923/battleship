// Import your classes/factories into another file, and drive the game using event listeners to interact with your objects. Create a module that helps you manage actions that should happen in the DOM.
const { Ship, Gameboard, Player } = require("./game-logic");

(function initializeComputer() {
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
  computer.populateShips();

  // return { computer };
})();
