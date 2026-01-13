'use client';

import { useEffect, useState } from 'react';
import { GameState } from '@/app/types/game';
import PlayerCard from '@/app/components/PlayerCard';
import ScoreControls from '@/app/components/ScoreControls';
import InningInfo from '@/app/components/InningInfo';

export default function TablePage() {
  const initialGameState: GameState = {
    players: [
      { id: 1, score: 0, name: '플레이어1' },
      { id: 2, score: 0, name: '플레이어2' },
    ],
    currentPlayerId: 1,
    inning: 1,
    targetScore: 10,
    isFinished: false,
  };

  const [game, setGame] = useState<GameState | null>(initialGameState);

  useEffect(() => {
    const saved = localStorage.getItem('gameState');
    if (saved) setGame(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (game) {
      localStorage.setItem('gameState', JSON.stringify(game));
    }
  }, [game]);

  if (!game) return <p>게임 로딩중...</p>;

  /* ✅ 플레이어 점수 +1 (현재 턴만 가능) */
  const addPoint = (playerId: number) => {
    setGame(prev => {
      if (!prev) return prev;

      // 🔒 현재 턴이 아니면 무시
      if (playerId !== prev.currentPlayerId) return prev;

      const players = prev.players.map(p =>
        p.id === playerId ? { ...p, score: p.score + 1 } : p
      );

      // 승리 체크
      const current = players.find(p => p.id === playerId)!;
      const other = players.find(p => p.id !== playerId)!;
      const finished = current.score >= prev.targetScore;

      if (finished) {
        const history = JSON.parse(localStorage.getItem('history') || '[]');
        history.push({
          date: new Date().toLocaleString(),
          winner: current.name,
          score: `${current.score} : ${other.score}`,
        });
        localStorage.setItem('history', JSON.stringify(history));
      }

      return { ...prev, players, isFinished: finished };
    });
  };

  return (
    <main
      className="table-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      {/* 플레이어 카드 */}
      <div className="player-row" style={{ display: 'flex', gap: '20px' }}>
        {game.players.map(player => {
          const isActiveTurn = player.id === game.currentPlayerId;

          return (
            <div
              key={player.id}
              onClick={() => {
                if (isActiveTurn) addPoint(player.id);
              }}
              style={{
                cursor: isActiveTurn ? 'pointer' : 'not-allowed',
                opacity: isActiveTurn ? 1 : 0.4,
              }}
            >
              <PlayerCard
                player={player}
                active={isActiveTurn}
              />
            </div>
          );
        })}
      </div>

      <InningInfo inning={game.inning} target={game.targetScore} />

      <ScoreControls game={game} setGame={setGame} />

      {/* 경기 종료 모달 */}
      {game.isFinished && (
        <div className="game-finish-modal">
          <div className="modal-card">
            <h2>🏆 경기 종료</h2>
            <p>
              {game.players.find(p => p.score >= game.targetScore)?.name} 승리!
            </p>
            <button
              onClick={() => {
                localStorage.removeItem('gameState');
                setGame({
                  players: [
                    { id: 1, name: game.players[0].name, score: 0 },
                    { id: 2, name: game.players[1].name, score: 0 },
                  ],
                  currentPlayerId: 1,
                  inning: 1,
                  targetScore: game.targetScore,
                  isFinished: false,
                });
              }}
            >
              새 경기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
