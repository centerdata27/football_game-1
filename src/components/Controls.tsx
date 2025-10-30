import type { Team } from "../types";

interface ControlsProp {
	onScore: (team: Team, pts: number) => void;
	onToggle: () => void;
	onNextQuarter: () => void;
	onReset: () => void;
	disabled?: boolean;

}

export default function Controls({onScore, onToggle, onNextQuarter, onReset, disabled = false}: ControlsProp) {
	const btn = "px-3 rounded border text-white disable-opacity-50 disabled:cursor-not-allowed"

	return (
		<section className="bg-white rounded-lg shadow p-4 w-full max-w-xl mt-4">
			<h2 className="text-xl font-bold text-gray-800 mb-2">Controls</h2>

			<div className="flex items-center justify-between">
				{/*Home Controls*/}
				<div className="space-x-2">
					<h3 className="font-semibold text-gray-600">Home</h3>
					<button className={`${btn} bg-green-600 hover:bg-green-700 `}
					onClick={() => onScore("HOME", 3)}>+3 Points</button>

					<button className={`${btn} bg-green-600 hover:bg-green-700 `}
					onClick={() => onScore("HOME", 6)}>+6 Points</button>

					<button className={`${btn} bg-green-600 hover:bg-green-700 `}
					onClick={() => onScore("HOME", 1)}>+1 Points</button>

					{/*Possession, Quarters and Reset*/}

					<button className={`${btn} bg-indigo-600 hover:bg-indigo-700 `}
					onClick={onToggle}>Toggle Possession</button>
					<button className={`${btn} bg-amber-600 hover:bg-amber-300`}
					onClick={onNextQuarter}>Next Quarter</button>
					<button className={`${btn} bg-yellow-500 hover:bg-yellow-200`}
					onClick={onReset}>Reset</button>

					{/*Away*/}
					
					<div className="space-x-2">
					<h3 className="font-semibold text-gray-600">Away</h3>
					<button className={`${btn} bg-orange-600 hover:bg-orange500`}
					onClick={() => onScore("AWAY", 3)}>+3 Points</button>

					<button className={`${btn} bg-orange-600 hover:bg-orange500`}
					onClick={() => onScore("AWAY", 6)}>+6 Points</button>

					<button className={`${btn} bg-orange-600 hover:bg-orange500`}
					onClick={() => onScore("AWAY", 1)}>+1 Points</button>
					</div>
				</div>
			</div>
		</section>
	)
}