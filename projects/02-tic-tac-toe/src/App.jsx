import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'

const TURNS = {
	X: 'x',
	O: 'o',
}

const Squares = ({ children, isSelected, updateBoard, index }) => {
	const className = `square ${isSelected ? 'is-selected' : ''}`

	const handleClick = () => {
		updateBoard(index)
	}

	return (
		<div onClick={handleClick} className={className}>
			{children}
		</div>
	)
}

const WINNER_COMBOS = [
	[0, 1, 2], // top row
	[3, 4, 5], // middle row
	[6, 7, 8], // bottom row
	[0, 4, 8], // diagonal top left to bottom right
	[2, 4, 6], // diagonal top right to bottom left
	[0, 3, 6], // left column
	[1, 4, 7], // middle column
	[2, 5, 8], // right column
]

function App() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null)

	const checkWinner = boardToCheck => {
		for (const combo of WINNER_COMBOS) {
			const [a, b, c] = combo
			//? si a = x and b = x and c = x = ganador
			//? si a = o and b = o and c = o = ganador
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

	const checkBoard = boardToCheck => {
		return boardToCheck.every(square => square !== null)
	}

	const updateBoard = index => {
		if (board[index] || winner) return

		const newBoard = [...board]
		newBoard[index] = turn
		setBoard(newBoard)

		const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
		setTurn(newTurn)
		
		const newWinner = checkWinner(newBoard)

		if (newWinner) {
			setWinner(newWinner)
			confetti()
		}else if(checkBoard(newBoard)){
			setWinner(false)
			confetti()
		}
	}

	const resetGame = () => {
		//? se cambia todos los estados para empezar el juego de nuevo
		setBoard(Array(9).fill(null))
		setTurn(TURNS.X)
		setWinner(null)
	}

	return (
		<main className='board'>
			<h1>Tic Tac Toe</h1>
			<button onClick={resetGame}>Empezar de nuevo</button>
			<section className='game'>
				{board.map((square, index) => {
					return (
						<Squares key={index} index={index} updateBoard={updateBoard}>
							{square}
						</Squares>
					)
				})}
			</section>

			<section className='turn'>
				<Squares isSelected={turn === TURNS.X}>{TURNS.X}</Squares>
				<Squares isSelected={turn === TURNS.O}>{TURNS.O}</Squares>
			</section>

			{winner !== null && (
				<section className='winner'>
					<div className='text'>
						<h2>{winner === false ? 'Empate' : 'Gano'}</h2>

						<header className='win'>
							{winner !== null && <Squares>{winner}</Squares>}
						</header>

						<footer>
							<button onClick={resetGame}>Empezar de nuevo </button>
						</footer>
					</div>
				</section>
			)}
		</main>
	)
}

export default App
