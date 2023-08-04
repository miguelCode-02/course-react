import { Squares } from './Square'

export const BuildBoard = ({ board, updateBoard }) => {
	return board.map((square, index) => {
		return (
			<Squares key={index} index={index} updateBoard={updateBoard}>
				{square}
			</Squares>
		)
	})

}
