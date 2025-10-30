import { useState } from "react";
import type { Score, Team, GameStatus } from './types';
import Scoreboard from "./components/Scoreboard";
import Controls from "./components/Controls";

export default function App() {
  const [score, setScore] = useState<Score>({HOME:0, AWAY: 0});
  const [possession, setPossession] = useState<Team>("HOME");
  const [quarter, setQuarter] = useState<1|2|3|4>(1);
  const [status, setStatus] = useState<GameStatus>("IN_PROGRESS")

  function handleScore(team: Team, pts: number) {
    if (status === 'FINAL') return;
    setScore((s) => ({ ...s, [team]: s[team] +pts}));
  }
  
  function togglePossession() {
    if (status === 'FINAL') return;
    setPossession((p) => (p=== "HOME" ? "AWAY" : "HOME"))
  }

  function nextQuarter() {
    setQuarter((q) => {
      if (q < 4) return (q+1) as 1 | 2 | 3 | 4;
      setStatus("FINAL")
      return q;
    })
  }

  function resetGame() {
    setScore({ HOME: 0, AWAY: 0 });
    setPossession("HOME");
    setQuarter(1);
    setStatus("IN_PROGRESS")
  }

  return (
      <main className="min-h-screen flex flex-col items-center p-6 bg-slate-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Football Game - Feature 2
        </h1>
        <Scoreboard score={score} possession={possession} quarter={quarter} status={status}/>
        <Controls onScore={handleScore} onToggle={togglePossession} onNextQuarter={nextQuarter} onReset={resetGame} disabled={status==='FINAL'}/>

        {status === 'FINAL' && (
          <div className="mt-4 w-full max-w-xl p-3 rounded border bg-red-50 border-red-500 text-red-800 text-sm">
            Game Over - Use <span className="font-semibold">Reset Game</span> to Start a New One!
          </div>
        )}

      </main>
    )

}