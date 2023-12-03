import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = boardToCheck => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    // ? si a = x and b = x and c = x = ganador
    // ? si a = o and b = o and c = o = ganador
    if (
      boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = boardToCheck => {
  return boardToCheck.every(square => square !== null)
}
