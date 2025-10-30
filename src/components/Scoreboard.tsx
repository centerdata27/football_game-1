import type {Score, Team} from '../types';
import QuarterBadge from './QuarterBadge';
interface ScoreboardProps {
	score: Score;
	possession: Team;
	//Feature 2: add new props for quter tracking
quarter: 1 | 2 | 3 | 4;
status: "IN_PROGRESS" | "FINAL"
}


export default function Scoreboard({ score, possession, quarter, status}:ScoreboardProps) {
	return (
		<section className='bg-white rounded-lg shadow p-4 w-full max-w-xl'>
			<h2 className='texl-xl font-bold text-gray-800 mb-2'>Scoreboard</h2>
			<div className='flex items-center gap-2'>
				<QuarterBadge quarter={quarter}/>
				{status === "FINAL" && (
					<span className='ml-2 text-xs font-semibold text-red-700 bg-red-100 border border-red-300 px-2 py-0.5 rounded'>
						FINAL
					</span>
				)}
				</div>

			<div className='flex justify-between text-lg font-semibold text-gray-700'>
				<span>Home: {score.HOME}</span>
				<span>Away: {score.AWAY}</span>
			</div>

			<p className='mt-2 text-sm text-gray-600'>
				Possession:{''}
				<span className='font-bold text-indigo-600'>{possession}</span>
			</p>
		</section>
	)
}