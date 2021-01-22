const { UNIMPLEMENTED } = require("../errors/errors");
const { puzzles } = require("../data/PuzzleSetups.json");
const { getExits } = require("../logic/puzzle");

const CONFIG = {
  thomasMoves: 1,
  wolfMoves: 2,
  moveLimit: 1000,
};

describe("Gets puzzle exits", () => {
  it("Trapped Thomas - should have no exits", () => {
    expect(() => {
      getExits(puzzles[2].layout);
    }).toHaveLength(0);
  });

  const expected = [{ row: 7, column: 1, borders: "LR" }];
  it("Backend Dev Test - has exit at 71", () => {
    expect(getExits(puzzles[0].layout)).toEqual(
      expect.arrayContaining(expected)
    );
  });
});
