export type Team = "HOME" | "AWAY";
export interface Score {
    HOME: number;
    AWAY: number;
}
export type GameStatus = "IN_PROGRESS" |"FINAL"
export interface GameStatusDTO{
    score: Score;
    possession: Team ;
    quarter: 1 | 2 | 3 | 4;
    status: GameStatus;
    yardline: number;
    homeTeamName: string;
    awayTeamName: string;
}
// DTO DATA TRANSFER OBJECT