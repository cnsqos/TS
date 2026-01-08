'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SettingPage() {
  const router = useRouter();
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [target, setTarget] = useState(20);

  const startGame = () => {
    const game = {
      players: [
        { id: 1, name: p1, score: 0 },
        { id: 2, name: p2, score: 0 },
      ],
      currentPlayerId: 1,
      inning: 1,
      targetScore: target,
      isFinished: false,
    };

    localStorage.setItem('gameState', JSON.stringify(game));
    router.push('/table/1');
  };

  return (
    <main>
      <h2>경기 설정</h2>
      <input placeholder="Player 1" onChange={e => setP1(e.target.value)} />
      <input placeholder="Player 2" onChange={e => setP2(e.target.value)} />
      <select onChange={e => setTarget(Number(e.target.value))}>
        <option value={20}>20점</option>
        <option value={30}>30점</option>
        <option value={40}>40점</option>
      </select>
      <button onClick={startGame}>경기 시작</button>
    </main>
  );
}