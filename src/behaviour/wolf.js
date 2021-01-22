const { UNIMPLEMENTED } = require("../errors/errors");
const { getAvailableMoves, makeMove } = require("./moving");

const moveWolf = (grid, wolf, thomas) => {
  const gridCell = grid.find(
    (cell) => cell.row === wolf.row && cell.column === wolf.column
  );
  const availableDirections = getAvailableMoves(gridCell.borders);

  if (wolf.column === thomas.column) {
    if (wolf.row > thomas.row && availableDirections.indexOf("") !== -1) {
      return makeMove(wolf, "D");
    } else if (
      wolf.row < thomas.row &&
      availableDirections.indexOf("U") !== -1
    ) {
      return makeMove(wolf, "U");
    } else {
      return wolf;
    }
  } else if (wolf.row === thomas.row) {
    if (
      wolf.column > thomas.column &&
      availableDirections.indexOf("L") !== -1
    ) {
      return makeMove(wolf, "L");
    } else if (
      wolf.column < thomas.column &&
      availableDirections.indexOf("R") !== -1
    ) {
      return makeMove(wolf, "R");
    } else {
      return wolf;
    }
  } else {
    if (availableDirections.indexOf("U") !== -1) {
      return makeMove(wolf, "U");
    } else if (availableDirections.indexOf("D") !== -1) {
      return makeMove(wolf, "D");
    } else if (availableDirections.indexOf("L") !== -1) {
      return makeMove(wolf, "L");
    } else if (availableDirections.indexOf("R") !== -1) {
      return makeMove(wolf, "R");
    } else {
      return wolf;
    }
  }
};

module.exports = { moveWolf };
