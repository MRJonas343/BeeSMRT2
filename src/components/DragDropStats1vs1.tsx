// *Types
import { DragDrop1vs1StatsProps } from "@types"

//* Assets
import RedBee from "@assets/redbee.jpeg"
import BlueBee from "@assets/bluebee.jpeg"

const DragDrop1vs1Stats: React.FC<DragDrop1vs1StatsProps> = ({
	activePlayer,
	player1Points,
	player2Points,
}) => {
	const baseClassName = "w-14 h-14 rounded-full lg:w-32 lg:h-32"
	const activePlayerClassName = `${baseClassName} drop-shadow-lg outline outline-Pink1 outline-4`
	const inactivePlayerClassName = `${baseClassName}`

	const player1ClassName =
		activePlayer === "player1" ? activePlayerClassName : inactivePlayerClassName

	const player2ClassName =
		activePlayer === "player2" ? activePlayerClassName : inactivePlayerClassName

	return (
		<>
			<div className="pt-4 pb-1 flex justify-between flex-row w-full lg:pt-8">
				<div className="flex w-4/6 justify-center gap-6 px-8 items-center lg:gap-12">
					<div>
						<img src={RedBee} alt="Red Bee" className={player1ClassName} />
					</div>
					<p className="text-3xl font-Principal text-Yellow1 text-3d lg:text-5xl">
						VS
					</p>
					<div>
						<img src={BlueBee} alt="Red Bee" className={player2ClassName} />
					</div>
				</div>

				<div className="w-2/6 flex flex-col lg:gap-3 mr-6 lg:justify-center">
					<p className="text-xl font-Principal text-red-400 text-3d lg:text-3xl">
						Player 1 points : {player1Points}
					</p>
					<p className="text-xl font-Principal text-blue-400 text-3d lg:text-3xl">
						Player 2 points : {player2Points}
					</p>
				</div>
			</div>
		</>
	)
}

export default DragDrop1vs1Stats
