export interface Player {
  id: number;
  name: string;
  score: number;
}

export interface GameState {
  players: Player[];
  currentPlayerId: number;
  inning: number;
  targetScore: number;
  isFinished: boolean;
}

export interface MatchHistory {
  date: string;
  winner: string;
  score: string;
}