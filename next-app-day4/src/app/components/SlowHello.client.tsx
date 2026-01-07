"use client";

import { useState, useEffect } from "react";

export default function SlowHello() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!ready) {
    return <p>컴포넌트 내부 로딩중...</p>;
  }

  return <p>동적으로 로드된 컴포넌트다.</p>;
}