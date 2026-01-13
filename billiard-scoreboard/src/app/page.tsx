import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>🎱 테이블 선택 🎱</h1>
      <Link href="/table/1" className="table-btn">1번 테이블</Link>
      <Link href="/table/2" className="table-btn">2번 테이블</Link>
      <Link href="/table/3" className="table-btn">3번 테이블</Link>
    </main>
  );
}




