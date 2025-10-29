export type Team = "HOME" | "AWAY";

export interface Score {
    HOME: number;
    AWAY: number;
}

//NEW and a part of feature 2
export type GameStatus = "IN_PROGRESS" |"FINAL"