:"use client"

import { useEffect, useState } from "react"

export default function MapClient(){
    const [info, setInfo] = useState<string>("초기상태");

    useEffect(() => {
        const ua = window.navigator.userAgent;
        setInfo(`브라우저에서 실행 중이다. (UserAgent 길이 : ${ua.length})`);
    },[])

  return (
    <div
      style={{
        width: 420,
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
      }}
    >
      <h3 style={{ marginTop: 0 }}>가짜 지도 컴포넌트</h3>
      <p style={{ margin: 0 }}>{info}</p>

      {/* 지도가 나오는 자리 */}

      <div
        style={{
          marginTop: 12,
          height: 220,
          borderRadius: 12,
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666",
        }}
      >
        (여기에 실제 지도 SDK가 들어간다고 생각하면 된다)
      </div>
    </div>
  );
}