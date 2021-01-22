const { UNIMPLEMENTED } = require("../errors/errors");
const { solvePuzzle } = require("./puzzle");

const runSolution = (puzzles, config) => {
  puzzles.forEach((puzzle) => {
    const solution = solvePuzzle(puzzle, config);
    console.log("SOLUTION: ", puzzle.name);
    console.log(solution.result);

    console.log("\n\n --------- \n\n");
  });
};

module.exports = { runSolution };
