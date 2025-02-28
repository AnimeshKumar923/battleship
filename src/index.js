import { ModuleFilenameHelpers } from "webpack";
import "./style.css";

function Ship() {
  let length = 0;
  let timesHit = 0;
  // const isShipSunk = false;
  function setShipLength(size) {
    length = size;
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
  };
}

module.exports = {
  Ship,
};
