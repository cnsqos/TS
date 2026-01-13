import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>🎱 테이블 선택 🎱</h1>
      <div className="table-buttons">
        {Array.from({ length: 9 }, (_, i) => (
          <Link key={i} href={`/table/${i+1}`} className="table-btn">
            {i+1}번 테이블
          </Link>
        ))}
      </div>
    </main>
  );
}