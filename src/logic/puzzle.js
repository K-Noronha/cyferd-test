const {
  HIT_MOVE_LIMIT,
  WOLF_ATE_THOMAS,
  THOMAS_ESCAPED,
} = require("./outcomes");
const { moveThomas } = require("../behaviour/thomas");
const { moveWolf } = require("../behaviour/wolf");

const getExits = (grid) => {
  //Making the assumption that the grid is always a square and layout has the same format.
  //Else, write functions to find the last row and column
  let exits = [];
  const endWall = grid[grid.length - 1].row;

  grid.forEach((cell) => {
    if (cell.row === 1 && cell.borders.indexOf("T") === -1) {
      exits.push(cell);
    }
    if (cell.row === endWall && cell.borders.indexOf("B") === -1) {
      exits.push(cell);
    }
    if (cell.column === 1 && cell.borders.indexOf("L") === -1) {
      exits.push(cell);
    }
    if (cell.column === endWall && cell.borders.indexOf("R") === -1) {
      exits.push(cell);
    }
  });

  return exits;
};

const runGame = (grid, exits, thomas, wolf, config) => {
  let thomasMoves = [];
  for (let moveIterator = 0; moveIterator < config.moveLimit; moveIterator++) {
    for (let moveCount = 0; moveCount < config.thomasMoves; moveCount++) {
      const options = "UDLR ";
      const randomMove = options[Math.floor(Math.random() * options.length)];

      try {
        thomas = moveThomas(grid, thomas, randomMove);
      } catch (error) {}

      if (
        exits.find(
          (cell) => cell.row === thomas.row && cell.column === thomas.column
        )
      ) {
        return THOMAS_ESCAPED;
      }
    }
    for (let moveCount = 0; moveCount < config.wolfMoves; moveCount++) {
      wolf = moveWolf(grid, wolf, thomas);

      if (wolf.row === thomas.row && wolf.column === thomas.column) {
        return WOLF_ATE_THOMAS;
      }
    }
  }
  return HIT_MOVE_LIMIT;
};

const solvePuzzle = (puzzle, config) => {
  const { thomas, wolf, layout } = puzzle;
  const exits = getExits(layout);

  return runGame(layout, exits, thomas, wolf, config);
};

module.exports = { solvePuzzle, runGame, getExits };
