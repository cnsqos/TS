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

  return (
    <main>
      {game.players.map(player => (
        <PlayerCard
          key={player.id}
          player={player}
          active={player.id === game.currentPlayerId}
        />
      ))}

      <InningInfo inning={game.inning} target={game.targetScore} />

      <ScoreControls game={game} setGame={setGame} />
      
      {/*경기 종료 모달 */}

        {game.isFinished && (
          <div className="game-finish-modal">
            <div className="modal-card">
              <h2>🏆 경기 종료</h2>
              <p>
                {
                  game.players.find(
                    p => p.score >= game.targetScore
                  )?.name
                } 승리!
              </p>
              <button
                onClick={() => {
                  if (!game) return;
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