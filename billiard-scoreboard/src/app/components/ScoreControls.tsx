'use client';
import { GameState } from '../types/game';

/* 기록 저장 함수 */
const saveHistory = (winner: string, score: string) => {
  const history = JSON.parse(localStorage.getItem('history') || '[]');
  history.push({
    date: new Date().toLocaleString(),
    winner,
    score,
  });
  localStorage.setItem('history', JSON.stringify(history));
};

export default function ScoreControls({
  game,
  setGame,
}: {
  game: GameState;
  setGame: React.Dispatch<React.SetStateAction<GameState | null>>;
}) {
  // 진행중인 플레이어 점수 -1
  const decreaseCurrentPlayer = () => {
    setGame(prev => {
      if (!prev) return prev;

      const players = prev.players.map(p =>
        p.id === prev.currentPlayerId
          ? { ...p, score: p.score > 0 ? p.score - 1 : 0 }
          : p
      );

      return { ...prev, players };
    });
  };

  // 미스 → 턴 변경
  const missTurn = () => {
    setGame(prev => {
      if (!prev) return prev;
      return {
        ...prev,
        currentPlayerId: prev.currentPlayerId === 1 ? 2 : 1,
        inning: prev.inning + 1,
      };
    });
  };

  return (
    <div className="score-controls-row" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '20px' }}>
      <button onClick={decreaseCurrentPlayer}>-1 점</button>
      <button onClick={missTurn}>턴 변경</button>
    </div>
  );
}