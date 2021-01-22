const { puzzles } = require("./data/PuzzleSetups.json");
const { runSolution } = require("./logic/solution");

const CONFIG = {
  thomasMoves: 1,
  wolfMoves: 2,
  moveLimit: 100,
};

runSolution(puzzles, CONFIG);
