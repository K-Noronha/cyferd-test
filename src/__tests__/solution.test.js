const { UNIMPLEMENTED } = require('../errors/errors')
const { puzzles } = require('../data/PuzzleSetups.json')
const { runSolution } = require('../logic/solution')

const CONFIG = {
    thomasMoves: 1,
    wolfMoves: 2,
    moveLimit: 1000
}

describe('Implementation check', () => {
    it('it should not throw an UNIMPLEMENTED error', () => {
        expect(() => { runSolution(puzzles, CONFIG) }).not.toThrow(UNIMPLEMENTED)
    })

    it('it should not throw any error', () => {
        expect(() => { runSolution(puzzles, CONFIG) }).not.toThrow()
    })
})