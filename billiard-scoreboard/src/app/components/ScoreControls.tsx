'use client';

import { GameState } from '../types/game';

/* 기록 저장 함수  */
const saveHistory = (winner: string, score: string) => {
  const history = JSON.parse(
    localStorage.getItem('history') || '[]'
  ); 

  history.push({
    date: new Date().toLocaleString(),
    winner,
    score,
  });

  localStorage.setItem('history', JSON.stringify(history));
};

/* 시작 */
export default function ScoreControls({
  game,
  setGame,
}: {
  game: GameState;
  setGame: React.Dispatch<React.SetStateAction<GameState | null>>;
}) {

  /* 득점 처리 */
  const score = () => {
    setGame(prev => {
      if (!prev) return prev; // null 방어 코드

      const players = prev.players.map(p =>
        p.id === prev.currentPlayerId
          ? { ...p, score: p.score + 1 }
          : p
      );

      const current = players.find(p => p.id === prev.currentPlayerId)!;
      const other = players.find(p => p.id !== prev.currentPlayerId)!;

      const finished = current.score >= prev.targetScore;

      if (finished){saveHistory(current.name, `${current.score} : ${other.score}`);}

      return {
        ...prev,
        players,
        isFinished: finished,
      };
    });
  };

  /* 미스 처리 */
  const miss = () => {
    setGame(prev => {
      if (!prev) return prev; // null 방어 코드 추가

      return {
        ...prev,
        currentPlayerId: prev.currentPlayerId === 1 ? 2 : 1,
        inning: prev.inning + 1,
      };
    });
  };

  /* UI */
  return (
    <div>
      <button onClick={score}>+1 득점</button>
      <button onClick={miss}>미스</button>
    </div>
  );
}

