'use client';

import { useEffect, useState } from 'react';

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem('history') || '[]'));
  }, []);

  return (
    <main>
      <h2>경기 기록</h2>
      <ul>
        {history.map((h: any, i) => (
          <li key={i}>
            {h.date} - {h.winner} ({h.score})
          </li>
        ))}
      </ul>
    </main>
  );
}