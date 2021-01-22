const { getAvailableMoves, makeMove } = require('./moving')
const { DIRECTION_NOT_VALID } = require('../errors/errors')

const moveThomas = (grid, thomas, direction) => {
    const gridCell = grid.find(cell => cell.row === thomas.row && cell.column === thomas.column)
    const availableDirections = getAvailableMoves(gridCell.borders)
    if (direction !== '' && availableDirections.indexOf(direction) === -1) throw DIRECTION_NOT_VALID
    return makeMove(thomas, direction)
}

module.exports = { moveThomas }