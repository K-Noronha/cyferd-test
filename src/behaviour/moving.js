const getAvailableMoves = (borders) => {
    let availableMoves = []
    if (borders.toUpperCase().indexOf('T') === -1) availableMoves.push('U')
    if (borders.toUpperCase().indexOf('B') === -1) availableMoves.push('D')
    if (borders.toUpperCase().indexOf('L') === -1) availableMoves.push('L')
    if (borders.toUpperCase().indexOf('R') === -1) availableMoves.push('R')
    return availableMoves
}

const makeMove = (currentPosition, direction) => {
    switch (direction) {
        case 'U':
            return { row: currentPosition.row-1, column: currentPosition.column }
        case 'D':
            return { row: currentPosition.row+1, column: currentPosition.column }
        case 'L':
            return { row: currentPosition.row, column: currentPosition.column-1 }
        case 'R':
            return { row: currentPosition.row, column: currentPosition.column+1 }
        default:
            return { row: currentPosition.row, column: currentPosition.column }
    }
}

module.exports = { getAvailableMoves, makeMove }