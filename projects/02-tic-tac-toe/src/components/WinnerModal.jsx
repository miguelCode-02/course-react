import { Squares } from "./Square"

export const WinnerModal = ({ winner, showBoard, resetGame, showSolvedBoard  }) => {
	if (winner === null || showBoard === false ) return null

    const winnerText = winner === false ? 'Empate' : 'Gano'

	return (
		<section className='winner'>
			<div className='text'>
				<h2>{winnerText}</h2>

				<header className='win'>{winner && <Squares>{winner}</Squares>}</header>

				<footer>
					<button onClick={resetGame}>Empezar de nuevo </button>
					<button onClick={showSolvedBoard}>Mostrar tablero </button>
				</footer>
			</div>
		</section>
	)
}
