import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Squares } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { BuildBoard } from './components/BuildBoard.jsx'
import { saveGameToStorage, resetGameStorage, saveWinnerToStorage } from './logic/storage'

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    return winnerFromStorage || null
  })

  const [showBoard, setShowBoard] = useState(false)

  const updateBoard = index => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({ board: newBoard, turn: newTurn })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      setShowBoard(true)
      confetti()
      saveWinnerToStorage(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      setShowBoard(true)
      confetti()
    }
  }

  const resetGame = () => {
    // ? se cambia todos los estados para empezar el juego de nuevo
    setShowBoard(false)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const showSolvedBoard = () => {
    setShowBoard(false)
  }

  const showGameResult = () => {
    setShowBoard(true)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      {!showBoard && winner && <button onClick={showGameResult}>Mostrar ganador</button>}
      <section className='game'>
        <BuildBoard board={board} updateBoard={updateBoard} />
      </section>

      <section className='turn'>
        <Squares isSelected={turn === TURNS.X}>{TURNS.X}</Squares>
        <Squares isSelected={turn === TURNS.O}>{TURNS.O}</Squares>
      </section>

      <WinnerModal resetGame={resetGame} showSolvedBoard={showSolvedBoard} winner={winner} showBoard={showBoard} />
    </main>
  )
}

export default App
